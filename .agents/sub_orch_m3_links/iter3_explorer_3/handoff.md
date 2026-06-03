# Handoff Report: Link Fixing (Iteration 3)

## Observation

I investigated the two files mentioned in the prompt:

1. `src/app/(public)/support/page.tsx`: At lines 158-159, there is a `<section>` for the "Contact Form" which lacks an `id` attribute.
2. `src/app/(public)/auth/page.tsx`: At lines 129-131, the "Passwort vergessen?" link is a static `<span className="...">Passwort vergessen?</span>`. The `TransitionLink` component is already imported at line 6 (`import { TransitionLink } from '@/components/ui/TransitionLink';`).

## Logic Chain

1. To make the "Kontakt" link on the support page anchor correctly, we need to add `id="kontakt"` to the `<section>` on line 159 in `src/app/(public)/support/page.tsx`.
2. To make the "Passwort vergessen?" text clickable and functional, we need to replace the `<span>` with a `<TransitionLink href="/password-reset">` preserving the same `className` so the visual appearance stays identical in `src/app/(public)/auth/page.tsx`.

## Caveats

- No caveats. The `TransitionLink` is already imported in `auth/page.tsx`, so no import changes are required.

## Conclusion

The required fixes are confirmed and exactly match the required objectives. The worker should apply the provided code replacements.

### Fix 1: `src/app/(public)/support/page.tsx`

Replace lines 158-159:

```typescript
      {/* SECTION 3: Contact Form */}
      <section className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">
```

**With:**

```typescript
      {/* SECTION 3: Contact Form */}
      <section id="kontakt" className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">
```

### Fix 2: `src/app/(public)/auth/page.tsx`

Replace lines 129-131:

```typescript
                <div className="text-right mt-2">
                  <span className="font-nunito text-xs font-bold text-[#CC624C] cursor-pointer hover:underline">Passwort vergessen?</span>
                </div>
```

**With:**

```typescript
                <div className="text-right mt-2">
                  <TransitionLink href="/password-reset" className="font-nunito text-xs font-bold text-[#CC624C] cursor-pointer hover:underline">Passwort vergessen?</TransitionLink>
                </div>
```

## Verification Method

- After changes, run standard `npm run build` or `npm run dev` to ensure no syntax errors.
- Verify that navigating to `/support#kontakt` correctly anchors to the contact form.
- Verify that clicking "Passwort vergessen?" on `/auth` navigates to `/password-reset`.
