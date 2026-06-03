## Observation

- In `src/app/(public)/support/page.tsx`, the contact form section (`{/* SECTION 3: Contact Form */}`) is missing the `id="kontakt"` attribute: `<section className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">`
- In `src/app/(public)/auth/page.tsx`, line 130, "Passwort vergessen?" is implemented as a simple `<span>` with no routing or Next.js `Link` functionality: `<span className="font-nunito text-xs font-bold text-[#CC624C] cursor-pointer hover:underline">Passwort vergessen?</span>`

## Logic Chain

- The anchor link `/support#kontakt` requires an element with `id="kontakt"` to exist on the support page. Since it's missing, any anchor link directing to this section will fail to scroll to it.
- The "Passwort vergessen?" text should ideally be an interactive link (e.g., `<Link href="/password-reset">`) routing the user to a reset password page. Since it's currently a static `<span>`, users cannot click it to recover their password.

## Caveats

- No caveats. The missing ID and static span were confirmed via direct file inspection.

## Conclusion

- The `id="kontakt"` anchor is completely missing from the support page.
- The "Passwort vergessen?" text does not function as a link and cannot route users to `/password-reset`.
- Both elements need to be fixed for proper navigation and functionality.

## Verification Method

- Run `grep -ni "kontakt" src/app/(public)/support/page.tsx` to verify the ID is missing.
- Inspect `src/app/(public)/auth/page.tsx` (around line 130) to see the `<span>Passwort vergessen?</span>` instead of a Next.js `<Link>`.
