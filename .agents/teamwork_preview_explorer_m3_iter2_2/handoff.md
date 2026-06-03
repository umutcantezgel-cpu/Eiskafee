# 5-Component Handoff Report

## Observation

1. **Passwort vergessen? link**: In `src/app/(public)/auth/page.tsx`, the "Passwort vergessen?" text is on line 130 and is currently wrapped in a static `<span>`. The project imports and uses `<TransitionLink>` on line 6 from `@/components/ui/TransitionLink` for internal navigation.
   ```tsx
   // Current:
   <span className="font-nunito text-xs font-bold text-[#b34832] cursor-pointer hover:underline">
     Passwort vergessen?
   </span>
   ```
2. **Support Contact Form ID**: In `src/app/(public)/support/page.tsx`, the contact form section begins on line 159. The preceding section (Floating FAQs, line 106) already utilizes an ID (`id="faq"`), but the contact form section lacks one.
   ```tsx
   // Current:
   {/* SECTION 3: Contact Form */}
   <section className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">
   ```

## Logic Chain

1. To make "Passwort vergessen?" a functional link pointing to `/password-reset`, it should be wrapped in `<TransitionLink href="/password-reset">`. Since `<TransitionLink>` is already imported in `auth/page.tsx`, it can be used directly instead of `<span>` to maintain app-wide page transition effects.
2. The footer link to `/kontakt` correctly redirects to `/support#kontakt` based on the previous iteration's context. By adding `id="kontakt"` to the contact form `<section>` tag in `src/app/(public)/support/page.tsx`, the browser will correctly anchor to that section upon navigation.

## Caveats

- I did not verify if the `/password-reset` route exists or functions correctly, as that is outside the scope of the objective. The objective explicitly assumes `/password-reset` is the target destination.

## Conclusion

The two link-related issues can be fully resolved with two small precise file edits:

**Edit 1: `src/app/(public)/auth/page.tsx`**
Change line 130 to use `TransitionLink`:

```tsx
// Before:
<span className="font-nunito text-xs font-bold text-[#b34832] cursor-pointer hover:underline">Passwort vergessen?</span>

// After:
<TransitionLink href="/password-reset" className="font-nunito text-xs font-bold text-[#b34832] hover:underline">Passwort vergessen?</TransitionLink>
```

**Edit 2: `src/app/(public)/support/page.tsx`**
Add `id="kontakt"` to line 159:

```tsx
// Before:
{/* SECTION 3: Contact Form */}
<section className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">

// After:
{/* SECTION 3: Contact Form */}
<section id="kontakt" className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">
```

## Verification Method

1. Launch the dev server via `npm run dev`.
2. Navigate to `/auth` and click "Passwort vergessen?". It should trigger a page transition and redirect to `/password-reset`.
3. Navigate to `/support#kontakt` (or click the footer link) and verify the browser scrolls to the "Schreib uns" contact form section.
