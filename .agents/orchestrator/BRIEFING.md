# BRIEFING — 2026-06-03T08:53:00Z

## Mission

Conduct a production-readiness audit, fix bugs, remove placeholders, ensure all internal links work, get `npm run build` to pass, and generate `comet_*_prompt.md` files for missing info without asking the user directly.

## 🔒 My Identity

- Archetype: Project Orchestrator
- Roles: orchestrator, user_liaison, human_reporter, successor
- Working directory: /Users/umurey/Downloads/Hey Fedee/hey-fede-app/.agents/orchestrator
- Original parent: top-level
- Original parent conversation ID: 1b3dc74e-5943-4d35-980e-0a8b15d4b74c

## 🔒 My Workflow

- **Pattern**: Project
- **Scope document**: /Users/umurey/Downloads/Hey Fedee/hey-fede-app/PROJECT.md

1. **Decompose**: Decompose the production readiness audit into verifiable milestones.
2. **Dispatch & Execute**:
   - Delegate each milestone to a sub-orchestrator.
3. **On failure**: Retry -> Replace -> Skip -> Redistribute -> Redesign -> Escalate
4. **Succession**: At 16 spawns, write handoff.md, spawn successor.

- **Work items**:
  1. Build and Type Check Readiness [pending]
  2. Placeholder and Copy Review [pending]
  3. Internal Link Validation [pending]
  4. Comet Prompts Generation [pending]
- **Current phase**: 1
- **Current focus**: Assessing project state and running initial tests to form sub-milestones.

## 🔒 Key Constraints

- Never reuse a subagent after handoff.
- Do not run build/test commands directly; require workers to do so (I am an orchestrator, but for simple commands I can `run_command` if I am assessing, wait, the instructions say: "NEVER run build/test commands yourself — require workers to do so. You MAY use file-editing tools ONLY for metadata/state files (.md) in your .agents/ folder.")
  Wait, the instructions say: "NEVER run build/test commands yourself — require workers to do so." So I will delegate `npm run build` to a worker or explorer.
- No direct questions to the user for configuration. Use `comet_<task>_prompt.md` files.

## Current Parent

- Conversation ID: 1b3dc74e-5943-4d35-980e-0a8b15d4b74c
- Updated: 2026-06-03T08:53:00Z

## Key Decisions Made

- Proceeding with a multi-track audit: Build & Tests, Placeholders, Links, Configs.

## Team Roster

| Agent      | Type | Work Item                        | Status      | Conv ID                              |
| ---------- | ---- | -------------------------------- | ----------- | ------------------------------------ |
| M1_SubOrch | self | M1: Initial Build & Type Audit   | in-progress | cb00a46c-1525-4998-902e-32234e992dff |
| M2_SubOrch | self | M2: Placeholder & Content Polish | in-progress | f67b25db-aca1-45ec-9de3-56f6d9bf3ab0 |
| M3_SubOrch | self | M3: Internal Link Integrity      | in-progress | 9eaa558b-18dc-423b-8f00-a01b414b0c76 |
| E2E_Orch   | self | E2E Testing Track                | in-progress | a4ffbc9e-873e-4534-adcc-7ff36615ee94 |
| M4_SubOrch | self | M4: External Config Prompts      | in-progress | 8c204d05-79e0-426a-8cb6-0363a2f5e122 |

## Succession Status

- Succession required: no
- Spawn count: 5 / 16
- Pending subagents: cb00a46c-1525-4998-902e-32234e992dff, f67b25db-aca1-45ec-9de3-56f6d9bf3ab0, 9eaa558b-18dc-423b-8f00-a01b414b0c76, a4ffbc9e-873e-4534-adcc-7ff36615ee94, 8c204d05-79e0-426a-8cb6-0363a2f5e122
- Predecessor: none
- Successor: not yet spawned

## Active Timers

- Heartbeat cron: not started
- Safety timer: none

## Artifact Index

- /Users/umurey/Downloads/Hey Fedee/hey-fede-app/PROJECT.md — Global index of architecture and milestones
- /Users/umurey/Downloads/Hey Fedee/hey-fede-app/.agents/orchestrator/progress.md — Execution tracking
