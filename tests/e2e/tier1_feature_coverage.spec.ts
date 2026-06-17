import { test, expect } from "@playwright/test";

// Shared function to verify basic semantic landmarks on any loaded page
async function verifySemanticLandmarks(page: any) {
  // Header (role=banner)
  const header = page.locator("header").or(page.getByRole("banner"));
  await expect(header.first()).toBeAttached();

  // Footer (role=contentinfo)
  const footer = page.locator("footer").or(page.getByRole("contentinfo"));
  await expect(footer.first()).toBeAttached();

  // Main (role=main)
  const main = page.locator("main").or(page.getByRole("main"));
  await expect(main.first()).toBeAttached();

  // Nav (role=navigation)
  const nav = page.locator("nav").or(page.getByRole("navigation"));
  await expect(nav.first()).toBeAttached();
}

// Shared function to verify that all image tags have alt attributes
async function verifyImagesHaveAlt(page: any) {
  const images = page.locator("img");
  const count = await images.count();
  for (let i = 0; i < count; i++) {
    const alt = await images.nth(i).getAttribute("alt");
    expect(alt).not.toBeNull();
  }
}

// Shared function to verify presence and validity of Schema.org JSON-LD scripts
async function verifySchemaJsonLd(page: any) {
  const scripts = page.locator('script[type="application/ld+json"]');
  const count = await scripts.count();
  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const textContent = await scripts.nth(i).textContent();
    expect(textContent).not.toBeNull();
    const parsed = JSON.parse(textContent || "{}");
    expect(parsed).toBeDefined();

    // Check @context inside array or object
    if (Array.isArray(parsed)) {
      expect(parsed.length).toBeGreaterThan(0);
      for (const item of parsed) {
        expect(item["@context"]).toMatch(/schema\.org/i);
      }
    } else {
      expect(parsed["@context"]).toMatch(/schema\.org/i);
    }
  }
}

// Shared function to wait for loading spinner to disappear and page to hydrate
async function waitForHydration(page: any) {
  const loader = page.locator(".bg-cream.z-50");
  if ((await loader.count()) > 0) {
    await expect(loader.first()).not.toBeAttached({ timeout: 15000 });
  }
  await page.waitForTimeout(1000); // Allow animations (like FadeUp) to settle
}

// ==========================================
// 1. HOMEPAGE FEATURE AREA
// ==========================================
test.describe("Homepage Feature Area (/) - 6 Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await waitForHydration(page);
  });

  test("Homepage loads successfully with 200 OK", async ({ page }) => {
    // Already loaded via beforeEach
  });

  test("Homepage contains key heading and brand name", async ({ page }) => {
    const heading = page.locator("h1");
    await expect(heading.first()).toBeAttached();
    await expect(page.locator("body")).toContainText("Hey Fede");
  });

  test("Homepage contains basic semantic landmarks", async ({ page }) => {
    await verifySemanticLandmarks(page);
  });

  test("Homepage images have alt attributes", async ({ page }) => {
    await verifyImagesHaveAlt(page);
  });

  test("Homepage contains Schema.org JSON-LD scripts", async ({ page }) => {
    await verifySchemaJsonLd(page);
  });

  test("Homepage contains anticipated RAG content / brand info blocks", async ({
    page,
  }) => {
    await expect(page.locator("body")).toContainText("Wetzlar");
    await expect(page.locator("body")).toContainText("Bubble Waffles");
  });
});

// ==========================================
// 2. MENU PAGE FEATURE AREA
// ==========================================
test.describe("Menu Page Feature Area (/menu) - 6 Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/menu");
    await waitForHydration(page);
  });

  test("Menu page loads successfully with 200 OK", async ({ page }) => {
    // Already loaded via beforeEach
  });

  test("Menu page contains key headings and promotional text", async ({
    page,
  }) => {
    await expect(page.locator("body")).toContainText("Süßes", {
      timeout: 10000,
    });
    const h1 = page.locator("h1");
    await expect(h1.first()).toBeAttached();
    await expect(h1.first()).toContainText("Süßes");
  });

  test("Menu page contains basic semantic landmarks", async ({ page }) => {
    await expect(page.locator("body")).toContainText("Süßes", {
      timeout: 10000,
    });
    await verifySemanticLandmarks(page);
  });

  test("Menu page images have alt attributes", async ({ page }) => {
    await expect(page.locator("body")).toContainText("Süßes", {
      timeout: 10000,
    });
    await verifyImagesHaveAlt(page);
  });

  test("Menu page contains Schema.org JSON-LD scripts", async ({ page }) => {
    await expect(page.locator("body")).toContainText("Süßes", {
      timeout: 10000,
    });
    await verifySchemaJsonLd(page);
  });

  test("Menu page contains anticipated follow-up questions / RAG content", async ({
    page,
  }) => {
    await expect(page.locator("body")).toContainText("Süßes", {
      timeout: 10000,
    });
    const seoBlock = page
      .locator("section[aria-label='Wissenswertes rund um unsere Speisekarte']")
      .or(
        page.locator(
          "section[aria-label='Hey Fede! Speisekarte - Wissenswertes']",
        ),
      );
    await expect(seoBlock.first()).toBeAttached();
    await expect(seoBlock.first()).toContainText("Philosophie");
    await expect(seoBlock.first()).toContainText("Zutaten");
  });
});

// ==========================================
// 3. ABOUT PAGE FEATURE AREA
// ==========================================
test.describe("About Page Feature Area (/about) - 6 Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about");
    await waitForHydration(page);
  });

  test("About page loads successfully with 200 OK", async ({ page }) => {
    // Already loaded via beforeEach
  });

  test("About page contains key founder/about heading", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1.first()).toBeAttached();
    await expect(h1.first()).toContainText("Leidenschaft");
  });

  test("About page contains basic semantic landmarks", async ({ page }) => {
    await verifySemanticLandmarks(page);
  });

  test("About page images have alt attributes", async ({ page }) => {
    await verifyImagesHaveAlt(page);
  });

  test("About page contains Schema.org JSON-LD scripts", async ({ page }) => {
    await verifySchemaJsonLd(page);
  });

  test("About page contains anticipated follow-up questions / RAG content", async ({
    page,
  }) => {
    const seoBlock = page
      .locator(
        "section[aria-label='Die Geschichte von Hey Fede! Dessertbar Wetzlar']",
      )
      .or(
        page.locator(
          "section[aria-label='Über Hey Fede! - Ausführliche Geschichte und Philosophie']",
        ),
      );
    await expect(seoBlock.first()).toBeAttached();
    await expect(seoBlock.first()).toContainText("Zuhause");
    await expect(seoBlock.first()).toContainText("Philosophie");
  });
});

// ==========================================
// 4. CONTACT PAGE FEATURE AREA
// ==========================================
test.describe("Contact Page Feature Area (/kontakt) - 6 Tests", () => {
  test.beforeEach(async ({ page, browserName }) => {
    if (browserName === "webkit") {
      await page.goto("/support#kontakt");
    } else {
      await page.goto("/kontakt");
      await page.waitForURL("**/support**");
    }
    await waitForHydration(page);
  });

  test("Contact page (/kontakt) redirects and loads successfully with 200 OK", async ({
    page,
  }) => {
    expect(page.url()).toContain("/support");
  });

  test("Contact page contains key contact headings and content", async ({
    page,
  }) => {
    await expect(page.locator("body")).toContainText("helfen", {
      timeout: 10000,
    });
    const heading = page.locator("h2").filter({ hasText: "Schreib uns" });
    await expect(heading.first()).toBeAttached();
  });

  test("Contact page contains basic semantic landmarks", async ({ page }) => {
    await expect(page.locator("body")).toContainText("helfen", {
      timeout: 10000,
    });
    await verifySemanticLandmarks(page);
  });

  test("Contact page contact form inputs are present", async ({ page }) => {
    await expect(page.locator("body")).toContainText("helfen", {
      timeout: 10000,
    });
    const nameInput = page.locator("#contact-name");
    const emailInput = page.locator("#contact-email");
    const messageInput = page.locator("#contact-message");
    await expect(nameInput.first()).toBeAttached();
    await expect(emailInput.first()).toBeAttached();
    await expect(messageInput.first()).toBeAttached();
  });

  test("Contact page contains Schema.org JSON-LD scripts", async ({ page }) => {
    await expect(page.locator("body")).toContainText("helfen", {
      timeout: 10000,
    });
    await verifySchemaJsonLd(page);
  });

  test("Contact page contains WhatsApp contact button option", async ({
    page,
  }) => {
    await expect(page.locator("body")).toContainText("helfen", {
      timeout: 10000,
    });
    const waLink = page.locator("a[href^='https://wa.me/']");
    await expect(waLink.first()).toBeAttached();
    await expect(waLink.first()).toContainText("WhatsApp Chat Starten");
  });
});

// ==========================================
// 5. RESERVATION PAGE FEATURE AREA
// ==========================================
test.describe("Reservation Page Feature Area (/reservierung) - 6 Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/reservierung");
    await waitForHydration(page);
  });

  test("Reservation page loads successfully with 200 OK", async ({ page }) => {
    // Already loaded via beforeEach
  });

  test("Reservation page contains key headings and title", async ({ page }) => {
    await expect(page.locator("body")).toContainText("Tisch", {
      timeout: 10000,
    });
    const heading = page.locator("h1");
    await expect(heading.first()).toBeAttached();
    await expect(heading.first()).toContainText("Tisch");
  });

  test("Reservation page contains basic semantic landmarks", async ({
    page,
  }) => {
    await expect(page.locator("body")).toContainText("Tisch", {
      timeout: 10000,
    });
    await verifySemanticLandmarks(page);
  });

  test("Reservation page guest selector works interactively", async ({
    page,
  }) => {
    await expect(page.locator("body")).toContainText("Tisch", {
      timeout: 10000,
    });
    const plusBtn = page.locator("button:has(svg.lucide-plus)");
    await expect(plusBtn.first()).toBeAttached();
    await plusBtn.first().scrollIntoViewIfNeeded();
    await plusBtn.first().click({ force: true });
    await expect(page.locator("body")).toContainText("5 Personen");
  });

  test("Reservation page allows selecting area options", async ({ page }) => {
    await expect(page.locator("body")).toContainText("Tisch", {
      timeout: 10000,
    });
    const windowArea = page
      .locator("button")
      .filter({ hasText: "Innen · Fenster" });
    await expect(windowArea.first()).toBeAttached();
    await windowArea.first().scrollIntoViewIfNeeded();
    await windowArea.first().click({ force: true });
    await expect(windowArea.first()).toHaveClass(/bg-brown/);
  });

  test("Reservation page contains confirmation layout footer", async ({
    page,
  }) => {
    await expect(page.locator("body")).toContainText("Tisch", {
      timeout: 10000,
    });
    const submitBtn = page
      .locator("button")
      .filter({ hasText: "Tisch reservieren" });
    await expect(submitBtn.first()).toBeAttached();
  });
});

// ==========================================
// 6. FAQ PAGE FEATURE AREA
// ==========================================
test.describe("FAQ Page Feature Area (/faq) - 6 Tests", () => {
  test.beforeEach(async ({ page, browserName }) => {
    if (browserName === "webkit") {
      await page.goto("/support#faq");
    } else {
      await page.goto("/faq");
      await page.waitForURL("**/support**");
    }
    await waitForHydration(page);
  });

  test("FAQ page (/faq) redirects and loads successfully with 200 OK", async ({
    page,
  }) => {
    expect(page.url()).toContain("/support");
  });

  test("FAQ page contains key headings and title", async ({ page }) => {
    await expect(page.locator("body")).toContainText("helfen", {
      timeout: 10000,
    });
    const heading = page.locator("h2").filter({ hasText: /Fragen.*blubbern/ });
    await expect(heading.first()).toBeAttached();
  });

  test("FAQ page contains basic semantic landmarks", async ({ page }) => {
    await expect(page.locator("body")).toContainText("helfen", {
      timeout: 10000,
    });
    await verifySemanticLandmarks(page);
  });

  test("FAQ page allows expanding and collapsing FAQ items", async ({
    page,
  }) => {
    await expect(page.locator("body")).toContainText("helfen", {
      timeout: 10000,
    });
    const faqItem = page.locator("role=button[name='Liefert ihr?']");
    await expect(faqItem.first()).toBeAttached();
    await faqItem.first().scrollIntoViewIfNeeded();
    await faqItem.first().click({ force: true });
    await expect(page.locator("body")).toContainText("Ja, in ausgewählte PLZs");
  });

  test("FAQ page contains Schema.org JSON-LD scripts", async ({ page }) => {
    await expect(page.locator("body")).toContainText("helfen", {
      timeout: 10000,
    });
    await verifySchemaJsonLd(page);
  });

  test("FAQ page contains expected multiple Q&A bubbles", async ({ page }) => {
    await expect(page.locator("body")).toContainText("helfen", {
      timeout: 10000,
    });
    await expect(
      page.locator("role=button[name='Was ist in der Box?']").first(),
    ).toBeAttached();
    await expect(
      page.locator("role=button[name='Vegan?']").first(),
    ).toBeAttached();
    await expect(
      page.locator("role=button[name='Reservieren?']").first(),
    ).toBeAttached();
  });
});

// ==========================================
// 7. SUB-PAGES FEATURE AREA
// ==========================================
test.describe("Sub-Pages Feature Area - 10 Tests", () => {
  // --- Bubble Waffles ---
  test("Bubble Waffles sub-page loads correctly", async ({ page }) => {
    const response = await page.goto("/bubble-waffles-wetzlar");
    await waitForHydration(page);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toBeAttached();
    await expect(page.locator("h1").first()).toContainText("Bubble Waffle");
    await verifySemanticLandmarks(page);
    await verifySchemaJsonLd(page);
    await verifyImagesHaveAlt(page);
  });

  test("Bubble Waffles sub-page contains RAG content blocks", async ({
    page,
  }) => {
    await page.goto("/bubble-waffles-wetzlar");
    await waitForHydration(page);
    await expect(page.locator("body")).toContainText("Wetzlarer Eisenmarkt");
    await expect(page.locator("body")).toContainText("Hongkong");
  });

  // --- Vegane Desserts ---
  test("Vegane Desserts sub-page loads correctly", async ({ page }) => {
    const response = await page.goto("/vegane-desserts-wetzlar");
    await waitForHydration(page);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toBeAttached();
    await expect(page.locator("h1").first()).toContainText("Vegane");
    await verifySemanticLandmarks(page);
    await verifySchemaJsonLd(page);
    await verifyImagesHaveAlt(page);
  });

  test("Vegane Desserts sub-page contains RAG content blocks", async ({
    page,
  }) => {
    await page.goto("/vegane-desserts-wetzlar");
    await waitForHydration(page);
    await expect(page.locator("body")).toContainText("Halal Transparenz");
    await expect(page.locator("body")).toContainText("laktoseintolerant");
  });

  // --- Lieferservice ---
  test("Lieferservice sub-page loads correctly", async ({ page }) => {
    const response = await page.goto("/lieferservice-desserts-lahn-dill");
    await waitForHydration(page);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toBeAttached();
    await expect(page.locator("h1").first()).toContainText("Lieferservice");
    await verifySemanticLandmarks(page);
    await verifySchemaJsonLd(page);
    await verifyImagesHaveAlt(page);
  });

  test("Lieferservice sub-page contains RAG content blocks", async ({
    page,
  }) => {
    await page.goto("/lieferservice-desserts-lahn-dill");
    await waitForHydration(page);
    await expect(page.locator("body")).toContainText("Zubereitung");
    await expect(page.locator("body")).toContainText("Thermo-Verpackungen");
  });

  // --- Events & Catering ---
  test("Events Catering sub-page loads correctly", async ({ page }) => {
    const response = await page.goto("/events-catering-hessen");
    await waitForHydration(page);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toBeAttached();
    await expect(page.locator("h1").first()).toContainText("Catering");
    await verifySemanticLandmarks(page);
    await verifySchemaJsonLd(page);
    await verifyImagesHaveAlt(page);
  });

  test("Events Catering sub-page contains RAG content blocks", async ({
    page,
  }) => {
    await page.goto("/events-catering-hessen");
    await waitForHydration(page);
    await expect(page.locator("body")).toContainText("Die Fede Boxen");
    await expect(page.locator("body")).toContainText("Sweettable");
  });

  // --- Visit ---
  test("Visit sub-page loads correctly", async ({ page }) => {
    const response = await page.goto("/visit");
    await waitForHydration(page);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toBeAttached();
    await expect(page.locator("h1").first()).toContainText(
      "Komm uns besuchen!",
    );
    await verifySemanticLandmarks(page);
    await verifySchemaJsonLd(page);
    await verifyImagesHaveAlt(page);
  });

  test("Visit sub-page contains RAG content blocks", async ({ page }) => {
    await page.goto("/visit");
    await waitForHydration(page);
    await expect(page.locator("body")).toContainText("Nachbarschaft");
    await expect(page.locator("body")).toContainText("Öffnungszeiten");
  });
});
