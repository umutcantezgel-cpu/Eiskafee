# Handoff Report: Milestone 3 - Link Fixing (Iteration 3)

## 1. Observation

- In `/Users/umurey/Downloads/Hey Fedee/hey-fede-app/src/app/(public)/support/page.tsx`, the contact form section is on lines 158-159:
  ```tsx
        {/* SECTION 3: Contact Form */}
        <section className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">
  ```
- In `/Users/umurey/Downloads/Hey Fedee/hey-fede-app/src/app/(public)/auth/page.tsx`, the static "Passwort vergessen?" span is on lines 128-132:
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
  `TransitionLink` is already correctly imported on line 6:
  `import { TransitionLink } from '@/components/ui/TransitionLink';`

## 2. Logic Chain

- Adding `id="kontakt"` to the `<section>` in `support/page.tsx` will allow in-page navigation anchors (like `/support#kontakt`) to jump to this specific section.
- Replacing the static `<span>` with a `<TransitionLink>` pointing to `/password-reset` in `auth/page.tsx` will restore password reset functionality for users, utilizing the app's standard page transition behavior.

## 3. Caveats

- No caveats. The exact required changes are identified and `TransitionLink` is confirmed to be imported.

## 4. Conclusion

The worker agent should apply the following two exact fixes using the `replace_file_content` tool.

**Fix 1: Add id="kontakt" to support page**
Target file: `/Users/umurey/Downloads/Hey Fedee/hey-fede-app/src/app/(public)/support/page.tsx`
StartLine: 158, EndLine: 159
TargetContent:

```tsx
      {/* SECTION 3: Contact Form */}
      <section className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">
```

ReplacementContent:

```tsx
      {/* SECTION 3: Contact Form */}
      <section id="kontakt" className="min-h-[150vh] px-6 relative z-10 flex flex-col justify-center items-center overflow-hidden">
```

**Fix 2: Make "Passwort vergessen?" a TransitionLink**
Target file: `/Users/umurey/Downloads/Hey Fedee/hey-fede-app/src/app/(public)/auth/page.tsx`
StartLine: 128, EndLine: 132
TargetContent:

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

ReplacementContent:

```tsx
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

## 5. Verification Method

- Ensure the `id="kontakt"` exists in the DOM for the support page.
- Ensure clicking "Passwort vergessen?" correctly navigates to the `/password-reset` route.
- Run project build/lint to ensure valid syntax.
