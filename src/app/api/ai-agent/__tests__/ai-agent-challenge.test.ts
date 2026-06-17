import { describe, it, expect, vi, beforeEach } from "vitest";

// 1. Mock external dependencies of the routes to prevent side-effects
vi.mock("@/lib/resend", () => {
  return {
    resend: {
      emails: {
        send: vi.fn().mockResolvedValue({ id: "mock-email-id" }),
      },
    },
    EMAIL_CONFIG: {
      from: "test@hey-fede.de",
      replyTo: "reply@hey-fede.de",
    },
  };
});

vi.mock("@/lib/firebase-admin", () => {
  return {
    adminDb: {
      collection: vi.fn().mockReturnValue({
        add: vi.fn().mockResolvedValue({ id: "mock-reservation-id" }),
        get: vi.fn().mockResolvedValue({ empty: true }),
      }),
    },
    admin: {
      apps: {
        length: 1,
      },
    },
  };
});

// We mock @upstash/redis and @upstash/ratelimit to test the rate-limiting logic
const mockRedisFromEnv = vi.fn().mockReturnValue({});
vi.mock("@upstash/redis", () => {
  return {
    Redis: {
      fromEnv: () => mockRedisFromEnv(),
    },
  };
});

const mockLimitFn = vi.fn();
vi.mock("@upstash/ratelimit", () => {
  return {
    Ratelimit: class {
      static slidingWindow = vi.fn();
      limit = mockLimitFn;
    },
  };
});

// We mock/import rate-limiting with control flags to allow testing the actual checkRateLimit function
let mockRateLimitActive = true;
let rateLimitResponse = { success: true, remaining: 10 };

vi.mock("@/lib/rate-limit", async (importOriginal) => {
  const original = await importOriginal<typeof import("@/lib/rate-limit")>();
  return {
    ...original,
    checkRateLimit: vi.fn().mockImplementation(async (limiter, ip) => {
      if (mockRateLimitActive) {
        return rateLimitResponse;
      }
      return original.checkRateLimit(limiter, ip);
    }),
  };
});

import { checkRateLimit } from "@/lib/rate-limit";
import { GET as readGet } from "../read/route";
import { POST as actionPost } from "../action/route";

describe("Adversarial Challenge & Integration Tests", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.AI_AGENT_API_KEY = "valid_agent_key";
    rateLimitResponse = { success: true, remaining: 10 };
    mockRateLimitActive = true;
  });

  describe("1. Unauthorized Access Checks (401)", () => {
    const endpoints = [
      { name: "GET /api/ai-agent/read", handler: (req: any) => readGet(req) },
      {
        name: "POST /api/ai-agent/action",
        handler: (req: any) => actionPost(req),
      },
    ];

    endpoints.forEach(({ name, handler }) => {
      it(`${name} rejects request with missing X-API-Key with 401`, async () => {
        const req = new Request("http://localhost/api/ai-agent/test", {
          method: name.startsWith("GET") ? "GET" : "POST",
          body: name.startsWith("POST")
            ? JSON.stringify({
                type: "contact",
                payload: { name: "A", email: "a@b.com", message: "Hi" },
              })
            : undefined,
        });

        const res = await handler(req);
        expect(res.status).toBe(401);
        const data = await res.json();
        expect(data).toEqual({ success: false, error: "Unauthorized" });
      });

      it(`${name} rejects request with wrong X-API-Key with 401`, async () => {
        const req = new Request("http://localhost/api/ai-agent/test", {
          method: name.startsWith("GET") ? "GET" : "POST",
          headers: { "X-API-Key": "wrong_key" },
          body: name.startsWith("POST")
            ? JSON.stringify({
                type: "contact",
                payload: { name: "A", email: "a@b.com", message: "Hi" },
              })
            : undefined,
        });

        const res = await handler(req);
        expect(res.status).toBe(401);
      });
    });
  });

  describe("2. Validation & Schema Checks (400)", () => {
    it("POST /api/ai-agent/action rejects invalid JSON body with 400", async () => {
      const req = new Request("http://localhost/api/ai-agent/action", {
        method: "POST",
        headers: { "X-API-Key": "valid_agent_key" },
        body: "this-is-not-json",
      });

      const res = await actionPost(req as any);
      expect(res.status).toBe(400);
      const data = await res.json();
      expect(data.error).toContain("Invalid JSON body");
    });

    it("POST /api/ai-agent/action rejects mismatched/missing payload schema fields", async () => {
      const invalidPayloads = [
        // Missing type
        { payload: { name: "A", email: "a@b.com", message: "Hi" } },
        // Invalid type
        {
          type: "invalid-type",
          payload: { name: "A", email: "a@b.com", message: "Hi" },
        },
        // Contact: Missing message
        { type: "contact", payload: { name: "A", email: "a@b.com" } },
        // Contact: Invalid email
        {
          type: "contact",
          payload: { name: "A", email: "invalid-email", message: "Hi" },
        },
        // Reservation: Missing guests
        {
          type: "reservation",
          payload: {
            name: "A",
            email: "a@b.com",
            phone: "123",
            date: "2026-06-20",
            time: "18:30",
          },
        },
        // Reservation: Negative guests
        {
          type: "reservation",
          payload: {
            name: "A",
            email: "a@b.com",
            phone: "123",
            guests: -1,
            date: "2026-06-20",
            time: "18:30",
          },
        },
        // Reservation: Invalid date format
        {
          type: "reservation",
          payload: {
            name: "A",
            email: "a@b.com",
            phone: "123",
            guests: 2,
            date: "20-06-2026",
            time: "18:30",
          },
        },
        // Reservation: Invalid time format
        {
          type: "reservation",
          payload: {
            name: "A",
            email: "a@b.com",
            phone: "123",
            guests: 2,
            date: "2026-06-20",
            time: "6:30 PM",
          },
        },
      ];

      for (const payload of invalidPayloads) {
        const req = new Request("http://localhost/api/ai-agent/action", {
          method: "POST",
          headers: { "X-API-Key": "valid_agent_key" },
          body: JSON.stringify(payload),
        });

        const res = await actionPost(req as any);
        expect(res.status).toBe(400);
        const data = await res.json();
        expect(data.success).toBe(false);
        expect(data.error).toBe("Invalid request payload");
        expect(data.details).toBeDefined();
      }
    });
  });

  describe("3. Rate Limiting Integration & Graceful Degradation", () => {
    it("returns 429 when rate limit is exceeded", async () => {
      rateLimitResponse = { success: false, remaining: 0 };

      const req = new Request("http://localhost/api/ai-agent/read", {
        method: "GET",
        headers: { "X-API-Key": "valid_agent_key" },
      });

      const res = await readGet(req as any);
      expect(res.status).toBe(429);
      const data = await res.json();
      expect(data).toEqual({
        success: false,
        error: "Too many requests. Please try again later.",
      });
    });

    it("checkRateLimit handles undefined Upstash Redis configuration gracefully", async () => {
      mockRateLimitActive = false;
      // If limiter is null (Upstash not configured), it should degrade gracefully and return success: true
      const result = await checkRateLimit(null, "test-ip");
      expect(result.success).toBe(true);
      expect(result.remaining).toBe(-1);
    });

    it("checkRateLimit calls Upstash when configured", async () => {
      mockRateLimitActive = false;
      mockLimitFn.mockResolvedValue({ success: true, remaining: 5 });
      const mockLimiter = {
        limit: mockLimitFn,
      } as any;

      const result = await checkRateLimit(mockLimiter, "test-ip");
      expect(mockLimitFn).toHaveBeenCalledWith("test-ip");
      expect(result).toEqual({ success: true, remaining: 5 });
    });
  });
});
