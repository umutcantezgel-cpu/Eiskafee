# Handoff Report

## Observation

1. In `src/app/(public)/auth/page.tsx`, around line 130, the "Passwort vergessen?" element is currently implemented as a static `<span>`:
   ```tsx
   <span className="font-nunito text-xs font-bold text-[#b34832] cursor-pointer hover:underline">
     Passwort vergessen?
   </span>
   ```
2. The `TransitionLink` component is already imported in `src/app/(public)/auth/page.tsx` on line 6:
   ```tsx
   import { TransitionLink } from "@/components/ui/TransitionLink";
   ```
3. In `src/app/(public)/support/page.tsx`, around line 159, the contact form section does not have an ID attribute:
   ```tsx
   {/* SECTION 3: Contact Form */}
   <section className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">
   ```

## Logic Chain

1. To fix the "Passwort vergessen?" link, we should replace the `<span>` with the already imported `TransitionLink` component, maintaining the existing styling and adding the `href="/password-reset"` attribute.
2. To fix the dead anchor link to the contact form, we must append the `id="kontakt"` attribute to the `<section>` element that wraps the contact form.

## Caveats

No caveats.

## Conclusion

**Fix 1: `src/app/(public)/auth/page.tsx`**
Replace line 130:

```tsx
<span className="font-nunito text-xs font-bold text-[#b34832] cursor-pointer hover:underline">
  Passwort vergessen?
</span>
```

With:

```tsx
<TransitionLink
  href="/password-reset"
  className="font-nunito text-xs font-bold text-[#b34832] cursor-pointer hover:underline"
>
  Passwort vergessen?
</TransitionLink>
```

**Fix 2: `src/app/(public)/support/page.tsx`**
Replace line 159:

```tsx
<section className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">
```

With:

```tsx
<section id="kontakt" className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">
```

## Verification Method

- Run the development server and navigate to `/auth`. Click "Passwort vergessen?" and verify it navigates to `/password-reset`.
- Navigate to the footer link "Kontakt" and verify it scrolls down to the contact form section smoothly.
