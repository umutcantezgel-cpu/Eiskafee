# E2E Test Infrastructure Design

## Infrastructure Proposal

- **Framework:** Playwright (due to strong support for Next.js, App Router, animations, and Canvas interactions).
- **Environment:** Local Development (`development` mode for testing hydration and SSR behavior) and CI/Build environment.
- **Tools:** `@playwright/test` for assertions, browser automation, and visual regression (useful for canvas/animations).

## Feature Inventory (Tiers 1-3)

### Tier 1: Core Pages & Navigation

- **Home (`/`)**: Rendering, SEO meta tags, basic layout loading.
- **About (`/about`)**: Static content rendering.
- **Visit (`/visit`)**: Static content, location details.
- **Legal Pages**: Imprint, Privacy Policy.
- **Global UI**: Header, Footer, navigation links functionality.

### Tier 2: Interactive Features & Canvas

- **Menu (`/menu`)**: Dynamic loading of items, filtering/categories.
- **Interactive Master-Features**:
  - `SyrupCursor`: Mouse tracking and cursor replacement.
  - `LiquidTransition`: Page transition animations.
  - `PhysicsPlayground`: Matter.js integration, interactions, and cleanup.
  - `ScratchCard`: Interactive canvas functionality.
- **A11y Checks**: Contrast, ARIA labels, tab navigation for all pages.

### Tier 3: Complex State Flows (Order Flow & Cart)

- **Auth Flow**: Login/Registration UI, session state.
- **Cart Management**: Add to cart, remove from cart, total calculation (Zustand state).
- **Order Hub (`/order-hub`)**: Hub navigation, recent orders.
- **Checkout Process**:
  - `/checkout`: User details, cart summary.
  - `/pickup-time`: Time selection validation.
  - `/order-review`: Final review of order data.
  - `/confirmation`: Success page rendering.
  - `/order-status`: Real-time or static status display.

## Real-World Scenarios (Tier 4)

### Scenario 1: The Hungry Customer (End-to-End Order Flow)

1. User lands on `/` and navigates to `/menu`.
2. User adds multiple dessert items to the cart.
3. User opens the cart and proceeds to `/checkout`.
4. User selects a valid time on `/pickup-time`.
5. User reviews the total on `/order-review`.
6. User submits the order and is redirected to `/confirmation`.
7. User checks `/order-status` to see the current status.

### Scenario 2: The Playful Visitor

1. User visits `/` and interacts with the `SyrupCursor`.
2. User navigates through the `LiquidTransition` to `/about`.
3. User plays with the `PhysicsPlayground` (assert no canvas/hydration errors).
4. User tries the `ScratchCard` feature.
5. User navigates back to `/` and system validates no memory leaks or uncleaned RAF loops occur.
