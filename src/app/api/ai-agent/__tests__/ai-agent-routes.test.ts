import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET as healthGet } from "../health/route";
import { GET as readGet } from "../read/route";
import { POST as actionPost } from "../action/route";
import { adminDb } from "@/lib/firebase-admin";
import { resend } from "@/lib/resend";

// Set up env vars for tests
process.env.AI_AGENT_API_KEY = "test_agent_key";
(process.env as any).NODE_ENV = "test";

// Mock Resend
vi.mock("@/lib/resend", () => {
  const mockSend = vi.fn().mockResolvedValue({ id: "mock-email-id" });
  return {
    resend: {
      emails: {
        send: mockSend,
      },
    },
    EMAIL_CONFIG: {
      from: "test@hey-fede.de",
      replyTo: "reply@hey-fede.de",
    },
  };
});

// Mock Firestore
vi.mock("@/lib/firebase-admin", () => {
  const mockAdd = vi.fn().mockResolvedValue({ id: "mock-reservation-id" });
  const mockGet = vi.fn();
  const mockCollection = vi.fn((name: string) => {
    if (name === "reservations") {
      return { add: mockAdd };
    }
    if (name === "menu_items") {
      return { get: mockGet };
    }
    return {
      get: vi.fn().mockResolvedValue({ empty: true }),
      add: vi.fn(),
    };
  });

  return {
    adminDb: {
      collection: mockCollection,
    },
    admin: {
      apps: {
        length: 1,
      },
    },
  };
});

// Mock rate limiting
vi.mock("@/lib/rate-limit", () => ({
  apiLimiter: null,
  formLimiter: null,
  checkRateLimit: vi.fn().mockResolvedValue({ success: true, remaining: 10 }),
}));

describe("AI Agent API Routes", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("GET /api/ai-agent/health", () => {
    it("returns health check status without auth", async () => {
      const response = await healthGet();
      expect(response.status).toBe(200);
      const json = await response.json();
      expect(json.status).toBe("ok");
      expect(json.service).toBe("ai-agent-api");
    });
  });

  describe("GET /api/ai-agent/read", () => {
    it("returns 401 when X-API-Key is missing", async () => {
      const req = new Request("http://localhost/api/ai-agent/read", {
        method: "GET",
      });
      const response = await readGet(req as any);
      expect(response.status).toBe(401);
      const json = await response.json();
      expect(json.success).toBe(false);
      expect(json.error).toBe("Unauthorized");
    });

    it("returns 401 when X-API-Key is invalid", async () => {
      const req = new Request("http://localhost/api/ai-agent/read", {
        method: "GET",
        headers: {
          "X-API-Key": "wrong_key",
        },
      });
      const response = await readGet(req as any);
      expect(response.status).toBe(401);
    });

    it("returns store metadata and menu from Firestore when not empty", async () => {
      const mockGet = (adminDb.collection("menu_items") as any).get;
      mockGet.mockResolvedValue({
        empty: false,
        forEach: (callback: any) => {
          callback({
            id: "item1",
            data: () => ({
              id: "item1",
              name: "Test Waffle",
              price: 6.5,
              desc: "Delicious test waffle",
              category: "bubble-waffle",
              available: true,
            }),
          });
        },
      });

      const req = new Request("http://localhost/api/ai-agent/read", {
        method: "GET",
        headers: {
          "X-API-Key": "test_agent_key",
        },
      });
      const response = await readGet(req as any);
      expect(response.status).toBe(200);
      const json = await response.json();
      expect(json.success).toBe(true);
      expect(json.store.name).toBe("Hey Fede! Dessertbar & Café");
      expect(json.menu["bubble-waffle"]).toBeDefined();
      expect(json.menu["bubble-waffle"].items[0].name).toBe("Test Waffle");
      expect(json.menu["bubble-waffle"].items[0].price).toBe("6,50€");
    });

    it("falls back to static menu when Firestore is empty", async () => {
      const mockGet = (adminDb.collection("menu_items") as any).get;
      mockGet.mockResolvedValue({
        empty: true,
      });

      const req = new Request("http://localhost/api/ai-agent/read", {
        method: "GET",
        headers: {
          "X-API-Key": "test_agent_key",
        },
      });
      const response = await readGet(req as any);
      expect(response.status).toBe(200);
      const json = await response.json();
      expect(json.success).toBe(true);
      expect(json.menu["eis-getraenke"]).toBeDefined();
    });
  });

  describe("POST /api/ai-agent/action", () => {
    it("returns 401 when X-API-Key is missing or invalid", async () => {
      const req = new Request("http://localhost/api/ai-agent/action", {
        method: "POST",
        body: JSON.stringify({
          type: "contact",
          payload: {
            name: "John Doe",
            email: "john@example.com",
            message: "Hello!",
          },
        }),
      });
      const response = await actionPost(req as any);
      expect(response.status).toBe(401);
    });

    it("returns 400 for invalid JSON body", async () => {
      const req = new Request("http://localhost/api/ai-agent/action", {
        method: "POST",
        headers: {
          "X-API-Key": "test_agent_key",
        },
        body: "invalid-json",
      });
      const response = await actionPost(req as any);
      expect(response.status).toBe(400);
    });

    it("returns 400 for invalid action type or missing fields", async () => {
      const req = new Request("http://localhost/api/ai-agent/action", {
        method: "POST",
        headers: {
          "X-API-Key": "test_agent_key",
        },
        body: JSON.stringify({
          type: "unknown-type",
          payload: {},
        }),
      });
      const response = await actionPost(req as any);
      expect(response.status).toBe(400);
    });

    it("validates contact schema and sends emails via Resend", async () => {
      const contactPayload = {
        name: "John Doe",
        email: "john@example.com",
        subject: "Inquiry",
        message: "This is a test message.",
      };

      const req = new Request("http://localhost/api/ai-agent/action", {
        method: "POST",
        headers: {
          "X-API-Key": "test_agent_key",
        },
        body: JSON.stringify({
          type: "contact",
          payload: contactPayload,
        }),
      });

      const response = await actionPost(req as any);
      expect(response.status).toBe(200);
      const json = await response.json();
      expect(json.success).toBe(true);
      expect(json.message).toContain("sent successfully");

      expect(resend.emails.send).toHaveBeenCalledTimes(2);
    });

    it("validates reservation schema and writes to database", async () => {
      const reservationPayload = {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "1234567890",
        guests: 4,
        date: "2026-06-20",
        time: "18:30",
        area: "Indoor",
        notes: "Window table",
      };

      const req = new Request("http://localhost/api/ai-agent/action", {
        method: "POST",
        headers: {
          "X-API-Key": "test_agent_key",
        },
        body: JSON.stringify({
          type: "reservation",
          payload: reservationPayload,
        }),
      });

      const response = await actionPost(req as any);
      expect(response.status).toBe(200);
      const json = await response.json();
      expect(json.success).toBe(true);
      expect(json.message).toContain("created successfully");

      const mockAdd = (adminDb.collection("reservations") as any).add;
      expect(adminDb.collection).toHaveBeenCalledWith("reservations");
      expect(mockAdd).toHaveBeenCalledTimes(1);
      expect(mockAdd.mock.calls[0][0]).toMatchObject({
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "1234567890",
        guests: 4,
        date: "2026-06-20",
        time: "18:30",
        area: "Indoor",
        notes: "Window table",
        status: "pending",
      });
    });
  });
});
