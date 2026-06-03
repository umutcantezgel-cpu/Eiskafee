# SEO Site Verification Configuration Task

You are a Comet Agent equipped with browser automation tools. Your task is to fetch the necessary SEO site verification tokens for this project and update the source code. Do NOT ask the user directly for this information.

## Context

The project requires site verification tokens for Google, Bing, and Yandex. These are currently hardcoded placeholders with `TODO` comments in `src/lib/seo/base-metadata.ts` (inside the `verification` object of the metadata export).

## Browser-Automation Instructions

Please follow these steps exactly:

### Google Site Verification

1. Navigate to `https://search.google.com/search-console`.
2. Authenticate using the user's Google account if not already logged in.
3. Add a property for the site URL (e.g., `https://hey-fede.de`).
4. Select the "HTML tag" verification method under "Other verification methods".
5. Extract the `content` attribute from the generated `<meta name="google-site-verification" ...>` tag.
6. Replace the placeholder `"google-site-verification-token"` in `src/lib/seo/base-metadata.ts` with this extracted value.

### Bing Site Verification

1. Navigate to `https://www.bing.com/webmasters/`.
2. Authenticate using the user's Microsoft or Google account.
3. Add the site (e.g., `https://hey-fede.de`).
4. Select the "HTML Meta Tag" verification method.
5. Extract the `content` attribute from the generated meta tag.
6. Replace the placeholder `"bing-verification-token"` (key `msvalidate.01`) in `src/lib/seo/base-metadata.ts` with this extracted value.

### Yandex Site Verification

1. Navigate to `https://webmaster.yandex.com/`.
2. Authenticate using the user's Yandex account.
3. Add the site (e.g., `https://hey-fede.de`).
4. Select the "Meta tag" verification method.
5. Extract the `content` attribute from the generated meta tag.
6. Replace the placeholder `"yandex-verification-token"` in `src/lib/seo/base-metadata.ts` with this extracted value.

After completing these steps, verify that `src/lib/seo/base-metadata.ts` contains all three actual verification tokens instead of the `TODO` placeholders.
