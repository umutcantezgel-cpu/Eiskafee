import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

const { mockRedisFromEnv, mockLimit, mockCheckRateLimit } = vi.hoisted(() => ({
  mockRedisFromEnv: vi.fn(),
  mockLimit: vi.fn(),
  mockCheckRateLimit: vi.fn(),
}));

// Mock external dependencies
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

vi.mock("@upstash/redis", () => ({
  Redis: {
    fromEnv: () => mockRedisFromEnv(),
  },
}));

vi.mock("@upstash/ratelimit", () => ({
  Ratelimit: class MockRatelimit {
    static slidingWindow = vi.fn();
    limit = (ip: string) => mockLimit(ip);
  },
}));

vi.mock("@/lib/rate-limit", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/rate-limit")>();
  return {
    ...actual,
    checkRateLimit: mockCheckRateLimit,
  };
});

import { GET as readGet } from "../read/route";
import { POST as actionPost } from "../action/route";
import { adminDb } from "@/lib/firebase-admin";

describe("AI Agent REST API - Empirical Challenge Suite", () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    vi.clearAllMocks();
    process.env = { ...originalEnv };
    (process.env as any).NODE_ENV = "test";
    process.env.AI_AGENT_API_KEY = "test-secret-key";
    mockCheckRateLimit.mockResolvedValue({ success: true, remaining: 10 });
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe("1. Unauthorized Access (missing/wrong X-API-Key)", () => {
    it("GET /api/ai-agent/read rejects with 401 when X-API-Key header is missing", async () => {
      const req = new Request("http://localhost/api/ai-agent/read", {
        method: "GET",
      });
      const response = await readGet(req as any);
      expect(response.status).toBe(401);
      const body = await response.json();
      expect(body).toEqual({ success: false, error: "Unauthorized" });
    });

    it("GET /api/ai-agent/read rejects with 401 when X-API-Key header is incorrect", async () => {
      const req = new Request("http://localhost/api/ai-agent/read", {
        method: "GET",
        headers: { "X-API-Key": "incorrect-key-123" },
      });
      const response = await readGet(req as any);
      expect(response.status).toBe(401);
      const body = await response.json();
      expect(body).toEqual({ success: false, error: "Unauthorized" });
    });

    it("POST /api/ai-agent/action rejects with 401 when X-API-Key header is missing", async () => {
      const req = new Request("http://localhost/api/ai-agent/action", {
        method: "POST",
        body: JSON.stringify({
          type: "contact",
          payload: { name: "A", email: "a@b.com", message: "Hi" },
        }),
      });
      const response = await actionPost(req as any);
      expect(response.status).toBe(401);
      const body = await response.json();
      expect(body).toEqual({ success: false, error: "Unauthorized" });
    });

    it("POST /api/ai-agent/action rejects with 401 when X-API-Key header is incorrect", async () => {
      const req = new Request("http://localhost/api/ai-agent/action", {
        method: "POST",
        headers: { "X-API-Key": "incorrect-key-123" },
        body: JSON.stringify({
          type: "contact",
          payload: { name: "A", email: "a@b.com", message: "Hi" },
        }),
      });
      const response = await actionPost(req as any);
      expect(response.status).toBe(401);
      const body = await response.json();
      expect(body).toEqual({ success: false, error: "Unauthorized" });
    });

    describe("Fallback Key Scenarios", () => {
      it("uses MCP_API_KEY when AI_AGENT_API_KEY is not configured", async () => {
        delete process.env.AI_AGENT_API_KEY;
        process.env.MCP_API_KEY = "mcp-fallback-key";

        const req = new Request("http://localhost/api/ai-agent/read", {
          method: "GET",
          headers: { "X-API-Key": "mcp-fallback-key" },
        });
        const response = await readGet(req as any);
        expect(response.status).toBe(200);
      });

      it("permits access when AI_AGENT_API_KEY is not configured but NODE_ENV is development", async () => {
        delete process.env.AI_AGENT_API_KEY;
        delete process.env.MCP_API_KEY;
        (process.env as any).NODE_ENV = "development";

        const req = new Request("http://localhost/api/ai-agent/read", {
          method: "GET",
        });
        const response = await readGet(req as any);
        expect(response.status).toBe(200);
      });

      it("disables the endpoint (returns 503) when no keys are configured in production/test env", async () => {
        delete process.env.AI_AGENT_API_KEY;
        delete process.env.MCP_API_KEY;
        (process.env as any).NODE_ENV = "production";

        const req = new Request("http://localhost/api/ai-agent/read", {
          method: "GET",
        });
        const response = await readGet(req as any);
        expect(response.status).toBe(503);
        const body = await response.json();
        expect(body).toEqual({ success: false, error: "Service unavailable" });
      });
    });
  });

  describe("2. Input Validation (invalid JSON or schema fields)", () => {
    const validHeader = { "X-API-Key": "test-secret-key" };

    it("rejects completely invalid JSON body on POST /api/ai-agent/action with 400", async () => {
      const req = new Request("http://localhost/api/ai-agent/action", {
        method: "POST",
        headers: validHeader,
        body: "{bad json",
      });
      const response = await actionPost(req as any);
      expect(response.status).toBe(400);
      const body = await response.json();
      expect(body.success).toBe(false);
      expect(body.error).toBe("Invalid JSON body");
    });

    it('rejects missing "type" in payload with 400', async () => {
      const req = new Request("http://localhost/api/ai-agent/action", {
        method: "POST",
        headers: validHeader,
        body: JSON.stringify({
          payload: {
            name: "John",
            email: "john@example.com",
            message: "Hello",
          },
        }),
      });
      const response = await actionPost(req as any);
      expect(response.status).toBe(400);
      const body = await response.json();
      expect(body.success).toBe(false);
      expect(body.error).toBe("Invalid request payload");
    });

    it("rejects unsupported action type with 400", async () => {
      const req = new Request("http://localhost/api/ai-agent/action", {
        method: "POST",
        headers: validHeader,
        body: JSON.stringify({
          type: "newsletter",
          payload: { email: "john@example.com" },
        }),
      });
      const response = await actionPost(req as any);
      expect(response.status).toBe(400);
      const body = await response.json();
      expect(body.success).toBe(false);
    });

    describe("Contact action validation", () => {
      it("rejects missing email with 400", async () => {
        const req = new Request("http://localhost/api/ai-agent/action", {
          method: "POST",
          headers: validHeader,
          body: JSON.stringify({
            type: "contact",
            payload: { name: "John Doe", message: "Hello" },
          }),
        });
        const response = await actionPost(req as any);
        expect(response.status).toBe(400);
      });

      it("rejects invalid email address format with 400", async () => {
        const req = new Request("http://localhost/api/ai-agent/action", {
          method: "POST",
          headers: validHeader,
          body: JSON.stringify({
            type: "contact",
            payload: {
              name: "John Doe",
              email: "not-an-email",
              message: "Hello",
            },
          }),
        });
        const response = await actionPost(req as any);
        expect(response.status).toBe(400);
      });

      it("rejects empty message with 400", async () => {
        const req = new Request("http://localhost/api/ai-agent/action", {
          method: "POST",
          headers: validHeader,
          body: JSON.stringify({
            type: "contact",
            payload: {
              name: "John Doe",
              email: "john@example.com",
              message: "",
            },
          }),
        });
        const response = await actionPost(req as any);
        expect(response.status).toBe(400);
      });
    });

    describe("Reservation action validation", () => {
      const validReservationPayload = {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "123456789",
        guests: 4,
        date: "2026-06-20",
        time: "18:30",
      };

      it("rejects missing required fields (e.g., phone) with 400", async () => {
        const payload = { ...validReservationPayload };
        delete (payload as any).phone;

        const req = new Request("http://localhost/api/ai-agent/action", {
          method: "POST",
          headers: validHeader,
          body: JSON.stringify({ type: "reservation", payload }),
        });
        const response = await actionPost(req as any);
        expect(response.status).toBe(400);
      });

      it("rejects invalid email address with 400", async () => {
        const payload = { ...validReservationPayload, email: "not-email" };

        const req = new Request("http://localhost/api/ai-agent/action", {
          method: "POST",
          headers: validHeader,
          body: JSON.stringify({ type: "reservation", payload }),
        });
        const response = await actionPost(req as any);
        expect(response.status).toBe(400);
      });

      it("rejects guests <= 0 with 400", async () => {
        const payload = { ...validReservationPayload, guests: 0 };

        const req = new Request("http://localhost/api/ai-agent/action", {
          method: "POST",
          headers: validHeader,
          body: JSON.stringify({ type: "reservation", payload }),
        });
        const response = await actionPost(req as any);
        expect(response.status).toBe(400);
      });

      it("rejects non-integer guests with 400", async () => {
        const payload = { ...validReservationPayload, guests: 2.5 };

        const req = new Request("http://localhost/api/ai-agent/action", {
          method: "POST",
          headers: validHeader,
          body: JSON.stringify({ type: "reservation", payload }),
        });
        const response = await actionPost(req as any);
        expect(response.status).toBe(400);
      });

      it("rejects invalid date format (YYYY/MM/DD or wrong format) with 400", async () => {
        const payload = { ...validReservationPayload, date: "2026/06/20" };

        const req = new Request("http://localhost/api/ai-agent/action", {
          method: "POST",
          headers: validHeader,
          body: JSON.stringify({ type: "reservation", payload }),
        });
        const response = await actionPost(req as any);
        expect(response.status).toBe(400);
      });

      it("rejects invalid time format (HH:MM vs other formats) with 400", async () => {
        const payload = { ...validReservationPayload, time: "6:30 PM" };

        const req = new Request("http://localhost/api/ai-agent/action", {
          method: "POST",
          headers: validHeader,
          body: JSON.stringify({ type: "reservation", payload }),
        });
        const response = await actionPost(req as any);
        expect(response.status).toBe(400);
      });
    });
  });

  describe("3. Rate Limiting integration behavior", () => {
    const validHeader = { "X-API-Key": "test-secret-key" };

    it("returns 429 when rate check fails (too many requests)", async () => {
      mockCheckRateLimit.mockResolvedValue({ success: false, remaining: 0 });

      const req = new Request("http://localhost/api/ai-agent/read", {
        method: "GET",
        headers: validHeader,
      });
      const response = await readGet(req as any);
      expect(response.status).toBe(429);
      const body = await response.json();
      expect(body).toEqual({
        success: false,
        error: "Too many requests. Please try again later.",
      });
    });

    it("POST /api/ai-agent/action returns 429 when rate check fails", async () => {
      mockCheckRateLimit.mockResolvedValue({ success: false, remaining: 0 });

      const req = new Request("http://localhost/api/ai-agent/action", {
        method: "POST",
        headers: validHeader,
        body: JSON.stringify({
          type: "contact",
          payload: { name: "John", email: "john@example.com", message: "Hi" },
        }),
      });
      const response = await actionPost(req as any);
      expect(response.status).toBe(429);
    });
  });
});
