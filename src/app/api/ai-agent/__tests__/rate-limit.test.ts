import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

const { mockRedisFromEnv, mockLimit } = vi.hoisted(() => ({
  mockRedisFromEnv: vi.fn(),
  mockLimit: vi.fn(),
}));

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

describe("Rate Limiter Module", () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("gracefully degrades (disables rate limiting) when Upstash Redis is not configured", async () => {
    // Ensure Upstash Redis env vars are unset
    delete process.env.UPSTASH_REDIS_REST_URL;
    delete process.env.UPSTASH_REDIS_REST_TOKEN;

    const { apiLimiter, checkRateLimit } = await import("@/lib/rate-limit");

    // Limiter should be null when not configured
    expect(apiLimiter).toBeNull();

    // checkRateLimit should return success: true and remaining: -1
    const result = await checkRateLimit(apiLimiter, "127.0.0.1");
    expect(result).toEqual({ success: true, remaining: -1 });
  });

  it("correctly builds and uses Upstash Redis rate limiter when configured", async () => {
    mockRedisFromEnv.mockReturnValue({ isMockRedis: true });
    mockLimit.mockResolvedValue({ success: true, remaining: 29 });

    // Configure env variables
    process.env.UPSTASH_REDIS_REST_URL = "https://mock-redis.upstash.io";
    process.env.UPSTASH_REDIS_REST_TOKEN = "mock-token";

    const { apiLimiter, checkRateLimit } = await import("@/lib/rate-limit");

    expect(apiLimiter).not.toBeNull();

    const result = await checkRateLimit(apiLimiter, "127.0.0.1");
    expect(result).toEqual({ success: true, remaining: 29 });
    expect(mockLimit).toHaveBeenCalledWith("127.0.0.1");
  });
});
