import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5efe8] flex flex-col items-center justify-center p-5 text-center relative overflow-hidden">
      {/* Background Blobs for friendly tone */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#E4C0A8] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#b34832] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Bitten Cookie Illustration */}
        <div className="relative mb-8 group">
          <div
            className="w-40 h-40 bg-[#b34832] rounded-full flex items-center justify-center text-7xl shadow-clay transition-transform group-hover:scale-105"
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 70%, 80% 85%, 90% 100%, 0% 100%)",
            }} // Fake bite
          >
            🍪
          </div>
          {/* Crumbs */}
          <div className="absolute -bottom-2 -right-4 text-2xl animate-bounce">
            🤎
          </div>
          <div className="absolute bottom-4 -right-8 text-lg animate-bounce animation-delay-200">
            🤎
          </div>
        </div>

        <h1 className="font-calistoga text-5xl text-[#2d1f19] mb-4">
          Ups! 404
        </h1>
        <p className="font-nunito text-lg text-[#7a5a52] max-w-sm mb-8">
          Jemand hat diese Seite wohl schon vernascht. Hier gibt es leider
          nichts mehr zu sehen.
        </p>

        <Link
          href="/"
          className="bg-[#b34832] text-[#f5efe8] px-8 py-4 rounded-full font-bold text-lg shadow-clay hover:bg-[#a84936] transition-colors"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
