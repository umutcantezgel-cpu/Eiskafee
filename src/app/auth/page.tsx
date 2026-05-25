"use client";
import React, { useState, useEffect } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import * as Icons from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { auth } from "@/lib/firebase/config";
import { useAuth } from "@/lib/firebase/AuthContext";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, loading, login, register } = useAuth();

  useEffect(() => {
    if (user && !loading) {
      const redirect = searchParams.get("redirect");
      router.push(redirect || "/");
    }
  }, [user, loading, router, searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.app.options.apiKey || auth.app.options.apiKey === "dummy" || auth.app.options.apiKey === "DEIN_API_KEY") {
      setError("Firebase Konfiguration fehlt. Bitte API-Keys eintragen.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        // Here we could also save the name to Firestore
        await register(email, password);
      }
      // redirect is handled by useEffect
    } catch (err: any) {
      setError(err.message || "Ein Fehler ist aufgetreten.");
    } finally {
      setIsLoading(false);
    }
  };

  if (loading || user) return null; // Prevent flicker

  return (
    <div className="min-h-screen bg-[#f5efe8] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] bg-[rgba(204,98,76,0.1)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[rgba(228,192,168,0.3)] rounded-full blur-3xl pointer-events-none" />

      <FadeUp className="w-full max-w-[440px] relative z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <div className="font-calistoga text-3xl text-[#CC624C]">Hey Fede!</div>
          </Link>
          <h1 className="font-calistoga text-3xl text-[#2d1f19] mb-2">
            {isLogin ? "Willkommen zurück" : "Konto erstellen"}
          </h1>
          <p className="font-nunito text-[#5c3d35]">
            {isLogin ? "Schön, dass du wieder da bist!" : "Melde dich an, um schneller zu bestellen."}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(45,31,25,0.06)]">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label className="block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-2">Name</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a7060]"><Icons.User size={18} /></div>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                    className="w-full bg-[#f5efe8] border-none outline-none rounded-xl py-3.5 pl-11 pr-4 font-nunito font-bold text-[#2d1f19]" 
                    placeholder="Max Mustermann" 
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-2">E-Mail</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a7060]"><Icons.Mail size={18} /></div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#f5efe8] border-none outline-none rounded-xl py-3.5 pl-11 pr-4 font-nunito font-bold text-[#2d1f19]" 
                  placeholder="hallo@example.de" 
                />
              </div>
            </div>

            <div>
              <label className="block font-nunito text-xs font-bold text-[#9a7060] uppercase tracking-wider mb-2">Passwort</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a7060]"><Icons.Lock size={18} /></div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-[#f5efe8] border-none outline-none rounded-xl py-3.5 pl-11 pr-4 font-nunito font-bold text-[#2d1f19]" 
                  placeholder="••••••••" 
                />
              </div>
              {isLogin && (
                <div className="text-right mt-2">
                  <span className="font-nunito text-xs font-bold text-[#CC624C] cursor-pointer hover:underline">Passwort vergessen?</span>
                </div>
              )}
            </div>

            {error && (
              <div className="p-3 bg-red-50 text-red-600 font-nunito text-sm rounded-xl">
                {error}
              </div>
            )}

            <div className="pt-2">
              <button 
                disabled={isLoading}
                className="w-full bg-[#CC624C] text-white rounded-xl py-3.5 font-nunito font-black text-[0.95rem] shadow-[0_4px_14px_rgba(204,98,76,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(204,98,76,0.4)] transition-all disabled:opacity-50 flex justify-center"
              >
                {isLoading ? <Icons.Loader2 className="animate-spin" size={20} /> : (isLogin ? "Anmelden" : "Registrieren")}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center font-nunito text-sm text-[#5c3d35]">
            {isLogin ? "Noch kein Konto? " : "Bereits ein Konto? "}
            <button 
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="font-bold text-[#CC624C] hover:underline cursor-pointer"
            >
              {isLogin ? "Jetzt erstellen" : "Anmelden"}
            </button>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
