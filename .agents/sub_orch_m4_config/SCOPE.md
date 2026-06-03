# Scope: M4 - External Config Prompts

## Milestones

| #   | Name            | Scope                                                                                                     | Dependencies | Status |
| --- | --------------- | --------------------------------------------------------------------------------------------------------- | ------------ | ------ |
| 1   | Discovery       | Find where Firebase, Stripe, or other external configs are initialized but missing real credentials/setup | none         | DONE   |
| 2   | Prompt Creation | Generate `comet_<task>_prompt.md` in the project root for each missing config                             | M1           | DONE   |
| 3   | Clean Up        | Ensure no generic `USER_TASKS.md` files exist                                                             | M2           | DONE   |

## Interface Contracts

- Prompts must contain explicit browser-automation instructions for a Comet Agent to log in and fetch the required keys/configuration.
- DO NOT ask the user directly for this information.
