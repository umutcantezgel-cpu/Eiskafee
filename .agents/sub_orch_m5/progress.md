# Progress — M5: Codebase Cleanup + Nav Links

## Current Status
Last visited: 2026-05-26T12:59Z

## Iteration Status
Current iteration: 1 / 32

- [x] Explorer phase dispatched (3 explorers)
  - Explorer 1 (import mapper): 64af7037 — COMPLETE
  - Explorer 2 (nav analyzer): e8dd4a5a — COMPLETE
  - Explorer 3 (duplicate comparator): 630fe38d — COMPLETE
- [x] Explorer phase complete — synthesized findings
- [ ] Worker phase (1 worker)
- [ ] Reviewer phase (2 reviewers)
- [ ] Forensic Audit
- [ ] Gate decision

## Synthesized Explorer Findings
### Consensus (all 3 agree):
1. Delete entire src/components/global/ (3 files, zero imports)
2. Delete interactive/PhysicsPlayground.tsx (dead, never imported)
3. Delete interactive/ScratchCard.tsx (dead, never imported)
4. Delete interactive/SyrupCursor.tsx (duplicate, causes double-render bug)
5. Move interactive/LiquidTransition.tsx → ui/LiquidTransition.tsx (unique, no duplicate)
6. Update template.tsx: remove SyrupCursor import/JSX, update LiquidTransition import
7. Header nav links: NO changes needed (all correct)
8. Footer: Add 4 nav links (FAQ, Kontakt, Gutscheine, Reservierung)
9. Footer: Change legal links from #hash to ?tab= format
10. Legal page: Add useSearchParams to handle ?tab= scrolling
