# BRIEFING — 2026-06-03T01:56:00-07:00

## Mission

Find missing API keys/configurations and create `comet_<task>_prompt.md` files for them.

## 🔒 My Identity

- Archetype: sub-orchestrator
- Roles: orchestrator, user_liaison, human_reporter, successor
- Working directory: /Users/umurey/Downloads/Hey Fedee/hey-fede-app/.agents/sub_orch_m4_config
- Original parent: main agent
- Original parent conversation ID: 1b3dc74e-5943-4d35-980e-0a8b15d4b74c

## 🔒 My Workflow

- **Pattern**: Canonical (Explorer → Worker → Reviewer)
- **Scope document**: /Users/umurey/Downloads/Hey Fedee/hey-fede-app/.agents/sub_orch_m4_config/SCOPE.md

1. **Decompose**: We will run a single iteration for all 3 milestones since they are simple file searches and writes.
2. **Dispatch & Execute**:
   - **Direct (iteration loop)**: Explorer → Worker → Reviewer → gate
3. **On failure**: Retry, Replace, Skip, Redistribute, Degrade
4. **Succession**: at 16 spawns, write handoff.md, spawn successor

- **Work items**:
  1. M1: Discovery [PLANNED]
  2. M2: Prompt Creation [PLANNED]
  3. M3: Clean Up [PLANNED]
- **Current phase**: 2
- **Current focus**: M1 & M2 & M3

## 🔒 Key Constraints

- Never write, modify, or create source code files directly (only metadata).
- Never reuse a subagent after it has delivered its handoff.
- Do NOT ask the user directly for keys. Provide explicit instructions for a Comet Agent to fetch them.

## Current Parent

- Conversation ID: 1b3dc74e-5943-4d35-980e-0a8b15d4b74c
- Updated: 2026-06-03T01:56:00-07:00

## Team Roster

| Agent      | Type                      | Work Item | Status  | Conv ID                              |
| ---------- | ------------------------- | --------- | ------- | ------------------------------------ |
| Explorer 1 | teamwork_preview_explorer | Discovery | pending | 20a8e9d4-df58-475c-b6ce-a61c1be22814 |
| Explorer 2 | teamwork_preview_explorer | Discovery | pending | d22b96b9-c044-488f-aab8-309f77e6dde4 |
| Explorer 3 | teamwork_preview_explorer | Discovery | pending | a48aff32-cb91-4638-9468-7e5af6ffe730 |

## Succession Status

- Succession required: no
- Spawn count: 3 / 16
- Pending subagents: none

## Active Timers

- Heartbeat cron: not started
