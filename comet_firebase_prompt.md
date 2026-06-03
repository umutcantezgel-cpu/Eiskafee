# Firebase Configuration Task

You are a Comet Agent equipped with browser automation tools. Your task is to fetch the necessary Firebase configuration for this project and populate the `.env.local` file. Do NOT ask the user directly for this information.

## Context

The project uses Firebase Client SDK (in `src/lib/firebase.ts`) and Firebase Admin SDK (in `src/lib/firebase-admin.ts`). Both expect real credentials to be available in the environment variables, as specified in `.env.example`.

## Browser-Automation Instructions

Please follow these steps exactly:

1. Navigate to `https://console.firebase.google.com/`.
2. Authenticate using the user's Google account if not already logged in.
3. Select the target Firebase project (or create a new project if one does not exist).
4. Navigate to **Project Settings** (click the gear icon next to "Project Overview").
5. In the **General** tab, scroll down to the **Your apps** section.
6. If a Web app exists, copy its `firebaseConfig` keys (`apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`). If no Web app exists, click the `</>` icon to register a new Web app and copy the displayed config keys.
7. Switch to the **Service accounts** tab within Project Settings.
8. Click the **Generate new private key** button and download the resulting JSON file.
9. Write the copied Web app config values into their respective `NEXT_PUBLIC_FIREBASE_*` variables in the `.env.local` file at the root of the project.
10. Read the downloaded JSON file, stringify its content, and write it to the `FIREBASE_ADMIN_CREDENTIALS` variable in the `.env.local` file.

After completing these steps, verify that `.env.local` contains all the necessary populated variables.
