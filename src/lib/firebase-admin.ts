import * as admin from "firebase-admin";

if (!admin.apps.length) {
  try {
    if (process.env.FIREBASE_ADMIN_CREDENTIALS) {
      const creds = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS);

      // Ensure private_key newlines are real newlines (not escaped \\n)
      if (creds.private_key) {
        creds.private_key = creds.private_key.replace(/\\n/g, "\n");
      }

      admin.initializeApp({
        credential: admin.credential.cert(creds),
      });
    } else {
      console.warn(
        "FIREBASE_ADMIN_CREDENTIALS is not set. Admin SDK may not function correctly.",
      );
      admin.initializeApp();
    }
  } catch (error) {
    console.error("Firebase admin initialization error:", error);
  }
}

// Guard: only export working instances if the app was initialized
const adminDb = admin.apps.length
  ? admin.firestore()
  : (null as unknown as admin.firestore.Firestore);
const adminAuth = admin.apps.length
  ? admin.auth()
  : (null as unknown as admin.auth.Auth);

export { adminDb, adminAuth, admin };
