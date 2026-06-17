# E2E Test Suite Ready

## Test Runner

- Command: `npx playwright test`
- Expected: all tests pass with exit code 0

## Coverage Summary

| Tier                   | Count (Tests) | Count (Runs) | Description                                             |
| ---------------------- | ------------: | -----------: | ------------------------------------------------------- |
| Sanity                 |             1 |            3 | Basic accessibility & homepage reachability             |
| 1. Feature Coverage    |            46 |          138 | Core user-facing routes, SEO, & accessibility           |
| 2. Boundary & Corner   |            10 |           30 | Input validation, API authorization, rate limiting      |
| 3. Cross-Feature       |             5 |           15 | Multi-step navigation and business details consistency  |
| 4. Real-World Workload |             7 |           21 | Full user flow simulation & AI agent semantic discovery |
| **Total**              |        **69** |      **207** | Across Chromium, Firefox, and WebKit                    |

## Feature Checklist

| Feature / Area                                   | Sanity | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
| ------------------------------------------------ | :----: | :----: | :----: | :----: | :----: |
| Homepage (`/`)                                   |   ✓    |   6    |   ✓    |   ✓    |   ✓    |
| Menu Page (`/menu`)                              |   -    |   6    |   ✓    |   ✓    |   ✓    |
| About Page (`/about`)                            |   -    |   6    |   ✓    |   ✓    |   -    |
| Contact Page (`/kontakt`)                        |   -    |   6    |   ✓    |   ✓    |   -    |
| Reservation Page (`/reservierung`)               |   -    |   6    |   ✓    |   ✓    |   -    |
| FAQ Page (`/support#faq`)                        |   -    |   6    |   ✓    |   ✓    |   -    |
| Sub-pages (5 routes)                             |   -    |   10   |   -    |   -    |   -    |
| AI Agent API Endpoints                           |   -    |   -    |   ✓    |   ✓    |   ✓    |
| LLM Resource Files (`llms.txt`, `llms-full.txt`) |   -    |   -    |   -    |   -    |   ✓    |
