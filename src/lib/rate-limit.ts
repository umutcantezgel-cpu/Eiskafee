import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Rate limiters for different endpoint categories.
 * Uses Upstash Redis (free tier sufficient for this app).
 *
 * Environment variables required:
 *   UPSTASH_REDIS_REST_URL
 *   UPSTASH_REDIS_REST_TOKEN
 */

function createRedis(): Redis | null {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    console.warn(
      "[rate-limit] UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN not set. Rate limiting is DISABLED.",
    );
    return null;
  }
  return Redis.fromEnv();
}

const redis = createRedis();

function createLimiter(
  window: Parameters<typeof Ratelimit.slidingWindow>[1],
  limit: number,
  prefix: string,
): Ratelimit | null {
  if (!redis) return null;
  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(limit, window),
    prefix,
  });
}

/** 5 login attempts per 60 seconds per IP */
export const authLimiter = createLimiter("60 s", 5, "rl:auth");

/** 30 API calls per 60 seconds per IP */
export const apiLimiter = createLimiter("60 s", 30, "rl:api");

/** 3 form submissions per 5 minutes per IP */
export const formLimiter = createLimiter("300 s", 3, "rl:form");

/** 10 order submissions per 10 minutes per IP */
export const orderLimiter = createLimiter("600 s", 10, "rl:order");

export interface RateLimitResult {
  success: boolean;
  remaining: number;
}

/**
 * Check rate limit. Returns { success: true } if Upstash is not configured
 * (graceful degradation - log warning only).
 */
export async function checkRateLimit(
  limiter: Ratelimit | null,
  identifier: string,
): Promise<RateLimitResult> {
  if (!limiter) {
    return { success: true, remaining: -1 };
  }
  const result = await limiter.limit(identifier);
  return { success: result.success, remaining: result.remaining };
}
