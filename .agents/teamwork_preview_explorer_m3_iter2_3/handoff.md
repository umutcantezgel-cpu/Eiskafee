# Handoff Report: Link Fixing (Iteration 2)

## 1. Observation

- In `src/app/(public)/auth/page.tsx`, the "Passwort vergessen?" element on line 130 is currently a static `<span>`:
  ```tsx
  <span className="font-nunito text-xs font-bold text-[#b34832] cursor-pointer hover:underline">
    Passwort vergessen?
  </span>
  ```
  The component already imports `TransitionLink` at line 6.
- In `src/app/(public)/support/page.tsx`, the contact form section starts on line 159:
  ```tsx
  <section className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">
  ```
  It lacks the `id="kontakt"` attribute which causes the anchor link `/support#kontakt` to fail.

## 2. Logic Chain

- To fix the first issue, the `<span>` should be replaced with a `TransitionLink` pointing to the `/password-reset` route, preserving the existing styling classes.
- To fix the second issue, adding the `id="kontakt"` attribute to the `section` element on line 159 of the support page will make the browser scroll directly to the contact form when the footer link (`/support#kontakt`) is clicked.

## 3. Caveats

- It is assumed that the `/password-reset` page exists or will be created (as specified in previous tasks).
- `TransitionLink` is assumed to be the standard link component for internal routing.

## 4. Conclusion

Two localized edits are required to resolve the remaining link issues:

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

## 5. Verification Method

- After making the changes, run the project dev server and ensure `/auth` compiles correctly.
- Click "Passwort vergessen?" on the `/auth` page and verify it navigates to `/password-reset`.
- Click the "Kontakt" link in the footer and verify it smoothly scrolls to the contact form section on the `/support` page.
