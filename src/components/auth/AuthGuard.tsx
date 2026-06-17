"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/store/useAuth";
import * as Icons from "lucide-react";

export function AuthGuard({
  children,
  requireAdmin = false,
}: {
  children: React.ReactNode;
  requireAdmin?: boolean;
}) {
  const { user, role, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sessionVerified, setSessionVerified] = useState(false);
  const [sessionRole, setSessionRole] = useState<string | null>(null);

  // Verify the server-side session to get the actual role from Custom Claims
  useEffect(() => {
    if (!loading && user) {
      // Check if we have a valid server session by pinging the session endpoint
      fetch("/api/auth/session/verify")
        .then((res) => {
          if (res.ok) return res.json();
          throw new Error("No session");
        })
        .then((data) => {
          setSessionRole(data.role);
          setSessionVerified(true);
        })
        .catch(() => {
          // No valid server session - redirect to auth to create one
          router.push(`/auth?redirect=${encodeURIComponent(pathname)}`);
        });
    } else if (!loading && !user) {
      router.push(`/auth?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [user, loading, router, pathname]);

  // Use server-verified role if available, fall back to client-side role
  const effectiveRole = sessionRole || role;

  useEffect(() => {
    if (sessionVerified && requireAdmin && effectiveRole !== "admin") {
      router.push("/profile");
    }
  }, [sessionVerified, requireAdmin, effectiveRole, router]);

  if (loading || !user || !sessionVerified) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <Icons.Loader2 className="w-8 h-8 text-terracotta animate-spin" />
      </div>
    );
  }

  if (requireAdmin && effectiveRole !== "admin") {
    return null;
  }

  return <>{children}</>;
}
