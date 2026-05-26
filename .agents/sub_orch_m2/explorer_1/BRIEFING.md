# BRIEFING — 2026-05-26T12:58:00Z

## Mission
Analyze checkout and pickup-time pages, produce detailed fix strategy for refactoring to use real Zustand cart data.

## 🔒 My Identity
- Archetype: Explorer
- Roles: Investigation, Synthesis
- Working directory: /Users/umurey/Downloads/Hey Fedee/hey-fede-app/.agents/sub_orch_m2/explorer_1
- Original parent: d7757783-e1b4-4153-b360-0d72996459d3
- Milestone: Milestone 2 — Order Flow Fix

## 🔒 Key Constraints
- Read-only investigation — do NOT implement
- All text in German
- TypeScript strict, 'use client'
- Terracotta (#CC624C), Cream (#FFF8F0 / #f5efe8)

## Current Parent
- Conversation ID: d7757783-e1b4-4153-b360-0d72996459d3
- Updated: 2026-05-26T12:58:00Z

## Investigation State
- **Explored paths**: checkout/page.tsx, pickup-time/page.tsx, useStore.ts, CartDrawer.tsx, order-review/page.tsx, confirmation/page.tsx, MenuClient.tsx, data.ts, pages-order.jsx (blueprint)
- **Key findings**: All pages use hardcoded data. CartDrawer already implements correct pattern. Price format is '7,00 €' string. Store needs order-level fields (pickupDay, pickupTime, contactName, contactPhone).
- **Unexplored areas**: None — all relevant files examined

## Key Decisions Made
- Price parsing follows CartDrawer pattern: `parseFloat(price.replace(',', '.').replace(/[^0-9.]/g, ''))`
- Zustand store needs extension for order-flow fields
- Inter-page data passes through Zustand, not URL params

## Artifact Index
- handoff.md — Detailed fix strategy with code snippets
