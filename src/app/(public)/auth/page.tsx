"use client";
import React, { useState, useEffect, Suspense } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import * as Icons from "lucide-react";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { useRouter, useSearchParams } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { useAuth } from "@/store/useAuth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (user && !loading) {
      const redirect = searchParams.get("redirect");
      // ✅ Open Redirect Prevention - only allow relative paths
      const safeRedirect =
        redirect?.startsWith("/") && !redirect.startsWith("//")
          ? redirect
          : "/profile";

      // ✅ If the user has a Firebase session but no server-side cookie,
      //    create the session cookie first to prevent redirect loops.
      const ensureSessionAndRedirect = async () => {
        try {
          const idToken = await user.getIdToken(true); // force refresh to get latest claims
          const res = await fetch("/api/auth/session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              idToken,
              fingerprint: navigator.userAgent,
            }),
          });
          if (res.ok) {
            router.push(safeRedirect);
          } else {
            // Session creation failed - sign out to break the loop
            const { signOut } = await import("firebase/auth");
            await signOut(auth);
          }
        } catch {
          const { signOut } = await import("firebase/auth");
          await signOut(auth);
        }
      };

      ensureSessionAndRedirect();
    }
  }, [user, loading, router, searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !auth.app.options.apiKey ||
      auth.app.options.apiKey === "dummy" ||
      auth.app.options.apiKey === "DEIN_API_KEY"
    ) {
      setError("Firebase Konfiguration fehlt. Bitte API-Keys eintragen.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      let userCredential;
      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        await setDoc(doc(db, "users", userCredential.user.uid), {
          role: "customer",
          createdAt: new Date().toISOString(),
          name: name,
          email: email,
        });
      }

      // ✅ Create encrypted server-side session cookie
      const idToken = await userCredential.user.getIdToken();
      await fetch("/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idToken,
          fingerprint: navigator.userAgent,
        }),
      });
    } catch (err: any) {
      // ✅ Sanitize error messages to prevent user enumeration
      const code = err.code as string;
      const friendlyMessages: Record<string, string> = {
        "auth/email-already-in-use": "Diese E-Mail ist bereits registriert.",
        "auth/wrong-password": "E-Mail oder Passwort ist falsch.",
        "auth/user-not-found": "E-Mail oder Passwort ist falsch.",
        "auth/invalid-credential": "E-Mail oder Passwort ist falsch.",
        "auth/too-many-requests": "Zu viele Versuche. Bitte später erneut.",
        "auth/weak-password": "Passwort muss mindestens 6 Zeichen haben.",
        "auth/invalid-email": "Bitte gib eine gültige E-Mail-Adresse ein.",
      };
      setError(friendlyMessages[code] || "Ein Fehler ist aufgetreten.");
    } finally {
      setIsLoading(false);
    }
  };

  if (loading || user) return null;

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-[rgba(204,98,76,0.1)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[rgba(228,192,168,0.3)] rounded-full blur-3xl pointer-events-none" />

      <FadeUp className="w-full max-w-[440px] relative z-10">
        <div className="text-center mb-8">
          <TransitionLink href="/" className="inline-block mb-6">
            <div className="font-heading text-3xl text-terracotta">
              Hey Fede!
            </div>
          </TransitionLink>
          <h1 className="font-heading text-3xl text-brown mb-2">
            {isLogin ? "Willkommen zurück" : "Konto erstellen"}
          </h1>
          <p className="font-body text-brown-mid">
            {isLogin
              ? "Schön, dass du wieder da bist!"
              : "Melde dich an, um schneller zu bestellen."}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(45,31,25,0.06)]">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label
                  htmlFor="auth-name"
                  className="block font-body text-xs font-bold text-bark-soft uppercase tracking-wider mb-2"
                >
                  Name
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-bark-soft">
                    <Icons.User size={18} />
                  </div>
                  <input
                    id="auth-name"
                    name="auth-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                    className="w-full bg-cream border-none outline-none rounded-xl py-3.5 pl-11 pr-4 font-body font-bold text-brown"
                    placeholder="Max Mustermann"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="auth-email"
                className="block font-body text-xs font-bold text-bark-soft uppercase tracking-wider mb-2"
              >
                E-Mail
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-bark-soft">
                  <Icons.Mail size={18} />
                </div>
                <input
                  id="auth-email"
                  name="auth-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-cream border-none outline-none rounded-xl py-3.5 pl-11 pr-4 font-body font-bold text-brown"
                  placeholder="hallo@example.de"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="auth-password"
                className="block font-body text-xs font-bold text-bark-soft uppercase tracking-wider mb-2"
              >
                Passwort
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-bark-soft">
                  <Icons.Lock size={18} />
                </div>
                <input
                  id="auth-password"
                  name="auth-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-cream border-none outline-none rounded-xl py-3.5 pl-11 pr-4 font-body font-bold text-brown"
                  placeholder="••••••••"
                />
              </div>
              {isLogin && (
                <div className="text-right mt-2">
                  <TransitionLink
                    href="/password-reset"
                    className="font-body text-xs font-bold text-terracotta cursor-pointer hover:underline"
                  >
                    Passwort vergessen?
                  </TransitionLink>
                </div>
              )}
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-600 font-body text-sm rounded-xl">
                {error}
              </div>
            )}

            <div className="pt-2">
              <button
                disabled={isLoading}
                className="w-full bg-terracotta text-white rounded-xl py-3.5 font-body font-black text-[0.95rem] shadow-[0_4px_14px_rgba(204,98,76,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(204,98,76,0.4)] transition-all disabled:opacity-50 flex justify-center"
              >
                {isLoading ? (
                  <Icons.Loader2 className="animate-spin" size={20} />
                ) : isLogin ? (
                  "Anmelden"
                ) : (
                  "Registrieren"
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center font-body text-sm text-brown-mid">
            {isLogin ? "Noch kein Konto? " : "Bereits ein Konto? "}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="font-bold text-terracotta hover:underline cursor-pointer"
            >
              {isLogin ? "Jetzt erstellen" : "Anmelden"}
            </button>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-cream flex items-center justify-center">
          <Icons.Loader2 className="animate-spin text-terracotta" size={32} />
        </div>
      }
    >
      <AuthForm />
    </Suspense>
  );
}
