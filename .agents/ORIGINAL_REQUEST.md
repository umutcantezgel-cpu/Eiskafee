# Original User Request

## Initial Request — 2026-06-03T08:52:50Z

Comprehensive production-readiness audit, orchestration, and execution for the "Hey Fede!" Next.js website. The agent team will identify missing steps, implement outstanding tasks, and prepare the site for a flawless public launch.

Working directory: /Users/umurey/Downloads/Hey Fedee/hey-fede-app
Integrity mode: development

## Requirements

### R1. Production-Readiness Audit and Execution

Conduct a full production-readiness audit of the codebase. Fix any discovered bugs, implement any missing features or pages, and polish the codebase to the highest premium design and functional standards. You may install new NPM packages, modify backend/Firebase code, or alter the architecture if it makes sense.

### R2. Comet Browser Agent Prompts for Missing Info

If you require external configuration (e.g., setting up Stripe, generating API keys, configuring Firebase production) or missing information from the user, do NOT ask the user directly or write a generic TODO list. Instead, you MUST generate dedicated Perplexity Comet Agent Prompts (named `comet_<task>_prompt.md`). These prompts must be designed so that the Comet Browser Agent can autonomously log into systems on the user's behalf, configure the services, and retrieve the required information.

## Acceptance Criteria

### Execution & Polish

- [ ] A local production build (`npm run build`) succeeds with zero errors.
- [ ] All placeholder text (e.g., "TODO", "Lorem Ipsum") is completely removed or replaced with production-ready copy.
- [ ] All internal links navigate correctly without 404s.

### Information Gathering

- [ ] Any required user input is encapsulated exclusively in `comet_*_prompt.md` files, containing explicit browser-automation instructions for a Comet Agent. No generic `USER_TASKS.md` files exist.
