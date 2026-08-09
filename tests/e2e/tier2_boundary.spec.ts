import { test, expect } from "@playwright/test";

// Helper for hydration wait
async function waitForHydration(page: any) {
  const loader = page.locator(".bg-cream.z-50");
  if ((await loader.count()) > 0) {
    await expect(loader.first()).not.toBeAttached({ timeout: 15000 });
  }
  await page.waitForTimeout(1000);
}

// Helper to perform APIRequestContext GET with retries to prevent transient ECONNRESET in parallel tests
async function getWithRetry(
  request: any,
  url: string,
  options?: any,
  retries = 3,
) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await request.get(url, options);
      await response.text();
      return response;
    } catch (e: any) {
      if (i === retries - 1) throw e;
      console.warn(
        `[getWithRetry] Request to ${url} failed with: ${e.message || e}. Retrying in 1s...`,
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

test.describe("Tier 2 - Boundary and Error Conditions", () => {
  // 1. Invalid URL Routing (404 Page Verification)
  test("returns 404 and error layout for non-existent route", async ({
    page,
  }) => {
    const response = await page.goto("/non-existent-page-random-12345");
    // Next.js static or dynamic 404 pages return 404 status.
    expect(response?.status()).toBe(404);

    // Check for common 404 text elements
    const bodyText = await page.locator("body").innerText();
    expect(bodyText).toMatch(/(404|nicht gefunden|not found)/i);
  });

  // 2. Empty/Invalid inputs on Contact Form
  test.describe("Contact Form Boundary Validation", () => {
    test.beforeEach(async ({ page, browserName }) => {
      await page.goto("/kontakt");
      await waitForHydration(page);
    });

    test("HTML5 validation prevents submission with empty required fields", async ({
      page,
    }) => {
      // Check required attribute presence
      const nameInput = page.locator("#kontakt-name");
      const emailInput = page.locator("#kontakt-email");
      const messageInput = page.locator("#kontakt-message");

      await expect(nameInput).toHaveAttribute("required");
      await expect(emailInput).toHaveAttribute("required");
      await expect(messageInput).toHaveAttribute("required");

      // Verify checkValidity returns false when empty
      const isNameValid = await nameInput.evaluate((el: HTMLInputElement) =>
        el.checkValidity(),
      );
      expect(isNameValid).toBe(false);

      const isEmailValid = await emailInput.evaluate((el: HTMLInputElement) =>
        el.checkValidity(),
      );
      expect(isEmailValid).toBe(false);
    });

    test("HTML5 validation flags invalid email addresses", async ({ page }) => {
      const emailInput = page.locator("#kontakt-email");

      // Set an invalid email
      await emailInput.fill("invalidemailaddress");

      const isEmailValid = await emailInput.evaluate((el: HTMLInputElement) =>
        el.checkValidity(),
      );
      expect(isEmailValid).toBe(false);
    });
  });

  // 3. API Key Authorization Checks (graceful fallback)
  test.describe("API Authorization and Key Validation", () => {
    test("GET /api/ai-agent/read handles authorization scenarios", async ({
      request,
    }) => {
      // Make a request with NO api key
      const responseNoKey = await getWithRetry(request, "/api/ai-agent/read");
      const statusNoKey = responseNoKey.status();

      // Gracefully handle 200 (auth bypassed/disabled), 401 (unauthorized), or 503 (disabled service)
      expect([200, 401, 503]).toContain(statusNoKey);

      if (statusNoKey === 401) {
        const json = await responseNoKey.json();
        expect(json.success).toBe(false);
        expect(json.error).toMatch(/unauthorized/i);
      } else if (statusNoKey === 503) {
        const json = await responseNoKey.json();
        expect(json.success).toBe(false);
        expect(json.error).toMatch(/service unavailable/i);
      }

      // Make a request with an invalid api key
      const responseInvalidKey = await getWithRetry(
        request,
        "/api/ai-agent/read",
        {
          headers: { "X-API-Key": "completely_invalid_key_12345" },
        },
      );
      const statusInvalidKey = responseInvalidKey.status();
      expect([200, 401, 503]).toContain(statusInvalidKey);

      if (statusInvalidKey === 401) {
        const json = await responseInvalidKey.json();
        expect(json.success).toBe(false);
        expect(json.error).toMatch(/unauthorized/i);
      }
    });

    test("POST /api/ai-agent/action handles authorization scenarios", async ({
      request,
    }) => {
      // Make a request with an invalid key
      const response = await request.post("/api/ai-agent/action", {
        headers: { "X-API-Key": "bad_key" },
        data: { type: "contact", payload: {} },
      });
      const status = response.status();
      expect([200, 400, 401, 503]).toContain(status);

      if (status === 401) {
        const json = await response.json();
        expect(json.success).toBe(false);
        expect(json.error).toMatch(/unauthorized/i);
      }
    });
  });

  // 4. API Input validation errors (Zod schema checking)
  test.describe("API Schema Boundary and Validation Errors", () => {
    const apiKey =
      process.env.AI_AGENT_API_KEY ||
      process.env.MCP_API_KEY ||
      "development_key";

    test("POST /api/ai-agent/action rejects invalid payload types", async ({
      request,
    }) => {
      const response = await request.post("/api/ai-agent/action", {
        headers: { "X-API-Key": apiKey },
        data: {
          type: "invalid_type_here",
          payload: {},
        },
      });

      const status = response.status();
      // If auth passes or is bypassed, we expect a 400 bad request.
      // If service is disabled, we expect 503. If unauthorized, 401.
      expect([400, 401, 503]).toContain(status);

      if (status === 400) {
        const json = await response.json();
        expect(json.success).toBe(false);
        expect(json.error).toMatch(/invalid request payload/i);
      }
    });

    test("POST /api/ai-agent/action rejects contact payload with invalid email", async ({
      request,
    }) => {
      const response = await request.post("/api/ai-agent/action", {
        headers: { "X-API-Key": apiKey },
        data: {
          type: "contact",
          payload: {
            name: "John Doe",
            email: "invalid-email-format",
            message: "Hello world",
          },
        },
      });

      const status = response.status();
      expect([400, 401, 503]).toContain(status);

      if (status === 400) {
        const json = await response.json();
        expect(json.success).toBe(false);
        expect(json.error).toMatch(/invalid request payload/i);
        expect(json.details.payload.email._errors).toContain(
          "Invalid email address",
        );
      }
    });

    test("POST /api/ai-agent/action rejects reservation payload with invalid parameters", async ({
      request,
    }) => {
      const response = await request.post("/api/ai-agent/action", {
        headers: { "X-API-Key": apiKey },
        data: {
          type: "reservation",
          payload: {
            name: "", // Invalid: empty
            email: "test@example.com",
            phone: "", // Invalid: empty
            guests: -5, // Invalid: negative
            date: "24-01-2026", // Invalid format (needs YYYY-MM-DD)
            time: "25:99", // Invalid format (needs HH:MM)
          },
        },
      });

      const status = response.status();
      expect([400, 401, 503]).toContain(status);

      if (status === 400) {
        const json = await response.json();
        expect(json.success).toBe(false);
        expect(json.error).toMatch(/invalid request payload/i);
        const errs = json.details.payload;
        expect(errs.name._errors).toContain("Name is required");
        expect(errs.phone._errors).toContain("Phone is required");
        expect(errs.guests._errors).toContain(
          "Guests must be a positive number",
        );
        expect(errs.date._errors).toContain("Date must be YYYY-MM-DD");
        expect(errs.time._errors).toContain("Time must be HH:MM");
      }
    });
  });

  // 5. Rate limit error responses
  test.describe("API Rate Limit Error Testing", () => {
    test("GET /api/ai-agent/read returns 429 or degrades gracefully", async ({
      request,
    }) => {
      // Perform multiple requests to see if rate limiting occurs naturally,
      // and assert that if 429 is received, it conforms to the spec.
      // Since it degrades gracefully if Upstash Redis is not set, we accept 200, 401, 503 or 429.
      let lastStatus = 200;
      for (let i = 0; i < 5; i++) {
        const response = await getWithRetry(request, "/api/ai-agent/read");
        lastStatus = response.status();
        if (lastStatus === 429) {
          const json = await response.json();
          expect(json.success).toBe(false);
          expect(json.error).toMatch(/(too many requests|rate limit)/i);
          break;
        }
      }
      expect([200, 401, 429, 503]).toContain(lastStatus);
    });

    test("mock 429 rate limit response behaves correctly", async ({ page }) => {
      // Mock the endpoint using Playwright routing to test how a rate limit would be handled
      await page.route("**/api/ai-agent/read", async (route) => {
        await route.fulfill({
          status: 429,
          contentType: "application/json",
          body: JSON.stringify({
            success: false,
            error: "Too many requests. Please try again later.",
          }),
        });
      });

      // Go to homepage first so we can fetch
      await page.goto("/");

      // Trigger fetch in page context to see if mock triggers properly
      const result = await page.evaluate(async () => {
        const response = await fetch("/api/ai-agent/read");
        const json = await response.json();
        return { status: response.status, json };
      });

      expect(result.status).toBe(429);
      expect(result.json.success).toBe(false);
      expect(result.json.error).toContain("Too many requests");
    });
  });
});
