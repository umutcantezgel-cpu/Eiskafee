# Scope: M3 - Internal Link Integrity

## Architecture

- Next.js 16 App Router with React 19, TypeScript
- Using `<Link href="...">` components

## Milestones

| #   | Name             | Scope                                                                                          | Dependencies | Status |
| --- | ---------------- | ---------------------------------------------------------------------------------------------- | ------------ | ------ |
| 1   | Link Audit       | Identify all internal links (`href` starting with `/`)                                         | none         | DONE   |
| 2   | Route Validation | Check which `href` values do not match any existing routes in `src/app`                        | M1           | DONE   |
| 3   | Link Fixing      | Fix invalid links, or create missing placeholder routes (like `/faq`, `/kontakt`) if necessary | M2           | DONE   |

## Interface Contracts

- Must not break the Next.js App Router conventions.
- Refer to main `PROJECT.md` for intended routes.
