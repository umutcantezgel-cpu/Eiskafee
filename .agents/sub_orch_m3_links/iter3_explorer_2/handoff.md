# Handoff Report - Link Fixing (Iteration 3)

## Observation

1. In `/Users/umurey/Downloads/Hey Fedee/hey-fede-app/src/app/(public)/support/page.tsx` at line 159, the contact form section is currently missing the `id="kontakt"` attribute:

```tsx
      {/* SECTION 3: Contact Form */}
      <section className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">
```

2. In `/Users/umurey/Downloads/Hey Fedee/hey-fede-app/src/app/(public)/auth/page.tsx` at line 130, the "Passwort vergessen?" text is rendered as a static `<span>`:

```tsx
{
  isLogin && (
    <div className="text-right mt-2">
      <span className="font-nunito text-xs font-bold text-[#CC624C] cursor-pointer hover:underline">
        Passwort vergessen?
      </span>
    </div>
  );
}
```

The `<TransitionLink>` component is already imported at line 6 of this file.

## Logic Chain

- Adding `id="kontakt"` to the section in `support/page.tsx` will allow anchoring links to correctly jump to the contact form.
- Replacing the static `<span>` in `auth/page.tsx` with a `<TransitionLink href="/password-reset">` with the exact same classes will restore routing functionality for the password reset feature while preserving the current design. Since `TransitionLink` is already imported, only the element tag and `href` prop need updating.

## Caveats

No caveats. The changes are straightforward and precisely match the objective requirements.

## Conclusion

The implementer agent must perform the following explicit replacements:

1. In `/Users/umurey/Downloads/Hey Fedee/hey-fede-app/src/app/(public)/support/page.tsx` (Lines 158-159):

```tsx
// TARGET CONTENT:
      {/* SECTION 3: Contact Form */}
      <section className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">

// REPLACEMENT CONTENT:
      {/* SECTION 3: Contact Form */}
      <section
        id="kontakt"
        className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden"
      >
```

2. In `/Users/umurey/Downloads/Hey Fedee/hey-fede-app/src/app/(public)/auth/page.tsx` (Lines 128-132):

```tsx
// TARGET CONTENT:
{
  isLogin && (
    <div className="text-right mt-2">
      <span className="font-nunito text-xs font-bold text-[#CC624C] cursor-pointer hover:underline">
        Passwort vergessen?
      </span>
    </div>
  );
}

// REPLACEMENT CONTENT:
{
  isLogin && (
    <div className="text-right mt-2">
      <TransitionLink
        href="/password-reset"
        className="font-nunito text-xs font-bold text-[#CC624C] cursor-pointer hover:underline"
      >
        Passwort vergessen?
      </TransitionLink>
    </div>
  );
}
```

## Verification Method

1. Run `cat src/app/\(public\)/support/page.tsx | grep id=\"kontakt\"` and verify the `id` exists.
2. Run `cat src/app/\(public\)/auth/page.tsx | grep TransitionLink` and verify it wraps the "Passwort vergessen?" text with `href="/password-reset"`.
3. Check for any compilation issues via `npm run build` or `npm run dev`.
