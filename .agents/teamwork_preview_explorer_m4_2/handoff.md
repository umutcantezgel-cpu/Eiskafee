# Handoff Report: External Configs & Credentials

## 1. Observation

- **Firebase Client Keys**: In `src/lib/firebase.ts` (lines 6-11), `firebaseConfig` properties default to `"dummy"`. In `src/app/(public)/auth/page.tsx` (line 33) and `src/components/menu/MenuClient.tsx` (line 116), the code checks if the API key is `"dummy"` or `"DEIN_API_KEY"`.
- **Firebase Admin SDK**: In `src/lib/firebase-admin.ts` (lines 5-15), the SDK expects `FIREBASE_ADMIN_CREDENTIALS` as a JSON string from `process.env`. The `.env.example` file (lines 10-11) has this empty.
- **SEO Verification Tokens**: In `src/lib/seo/base-metadata.ts` (lines 103-107), the verification tokens for Google, Yandex, and Bing have hardcoded placeholder strings: `"google-site-verification-token" // TODO: Add actual token`, `"yandex-verification-token"`, and `"msvalidate.01": "bing-verification-token"`.
- **Stripe**: A codebase-wide search for "stripe" returned no results related to Stripe initialization.
- **USER_TASKS.md**: A file search for `USER_TASKS.md` or `*USER_TASKS*` returned 0 results.

## 2. Logic Chain

- The fallback to `"dummy"` and `"DEIN_API_KEY"` in the Firebase client initialization indicates that production client keys are missing in the environment setup.
- The `FIREBASE_ADMIN_CREDENTIALS` logic in `firebase-admin.ts` coupled with the empty `.env.example` indicates the backend admin SDK credentials need to be provisioned for production.
- The `TODO` comment and placeholder strings in `base-metadata.ts` indicate that SEO verification keys need to be obtained from Google Search Console, Yandex Webmaster, and Bing Webmaster.
- The lack of Stripe references means no Stripe config is initialized yet, so no Stripe keys need to be fetched for existing code.
- The absence of `USER_TASKS.md` files means no cleanup is required for generic task files.

## 3. Caveats

- The `.env.local` file contains some Firebase keys, but these might be developer or test keys. The source files still contain the default placeholders (`"dummy"`) and explicit error checks for them, meaning the codebase logic itself requires these keys to be verified/provisioned for a real environment.
- We did not find Stripe; if Stripe is supposed to be there, it hasn't been implemented yet.
- The proposed browser automation instructions assume the Comet agent has the user's session/cookies available to bypass multi-factor authentication, or that the user will be present to approve the login.

## 4. Conclusion

Firebase Client/Admin keys and SEO Verification tokens (Google, Bing, Yandex) are the external configs missing real setup. No generic `USER_TASKS.md` files exist.

### Proposed Comet Agent Browser-Automation Instructions

**For Firebase Client Keys:**

1. Navigate to `console.firebase.google.com`.
2. Log in with the Google account.
3. Select the project (e.g., "hey-fedee").
4. Navigate to Project settings -> General -> "Your apps".
5. Select the web app.
6. Copy the `firebaseConfig` object values (`apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`).

**For Firebase Admin SDK:**

1. Navigate to `console.firebase.google.com`.
2. Select the project.
3. Navigate to Project settings -> Service accounts.
4. Click "Generate new private key".
5. Read the downloaded JSON file, stringify it, and assign it to the `FIREBASE_ADMIN_CREDENTIALS` environment variable.

**For Google Site Verification:**

1. Navigate to `search.google.com/search-console`.
2. Log in with the Google account.
3. Add a property for `https://hey-fede.de`.
4. Select the "HTML tag" verification method under "Other verification methods".
5. Extract the `content` attribute from the generated `<meta name="google-site-verification" ...>` tag.

**For Bing Site Verification:**

1. Navigate to `bing.com/webmasters`.
2. Log in with the Microsoft/Google account.
3. Add the site `https://hey-fede.de`.
4. Select the "HTML Meta Tag" verification method.
5. Extract the `content` attribute from the generated meta tag.

**For Yandex Site Verification:**

1. Navigate to `webmaster.yandex.com`.
2. Log in with the Yandex account.
3. Add the site `https://hey-fede.de`.
4. Select the "Meta tag" verification method.
5. Extract the `content` attribute from the generated meta tag.

## 5. Verification Method

- Run `cat src/lib/firebase.ts` to see the `"dummy"` placeholders.
- Run `cat src/app/\(public\)/auth/page.tsx` (line 33) to verify the check for missing Firebase configuration.
- Run `cat src/lib/seo/base-metadata.ts` to see the SEO `TODO` comments.
- Run `find . -name "*USER_TASKS.md"` to confirm no results are found.
- Run `grep -ri "stripe" src/` to confirm no Stripe usage exists in the source codebase.
