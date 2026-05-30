"use client";

import { useEffect } from "react";
import { useAuth } from "@/store/useAuth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize the auth listener only once when the provider mounts
    useAuth.getState().init();
  }, []);

  return <>{children}</>;
}
