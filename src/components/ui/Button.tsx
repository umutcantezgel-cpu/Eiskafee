"use client";

import React, { useState } from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  large?: boolean;
  sectionBg?: string;
  className?: string;
}

export function PrimaryButton({
  children,
  onClick,
  large = false,
  sectionBg = "#f5efe8",
  className = "",
}: PrimaryButtonProps) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="relative inline-block"
      style={{ display: "inline-flex" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <button
        onClick={onClick}
        className={`relative z-10 bg-[#CC624C] text-white font-extrabold rounded-full
          transition-all duration-300 whitespace-nowrap tracking-tight cursor-pointer
          hover:bg-[#b5523d] active:scale-95
          ${large ? "px-9 py-4 text-[0.96rem]" : "px-7 py-[11px] text-sm"}
          ${className}`}
        style={{
          transform: hov ? "scale(1.05) translateY(-1px)" : "scale(1)",
          boxShadow: hov ? "0 8px 28px rgba(204,98,76,0.34)" : "0 3px 12px rgba(204,98,76,0.18)",
          transition: "all 0.28s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {children}
      </button>
      {/* ── Bissspur (bite-mark notch) ── */}
      <div
        style={{
          position: "absolute",
          zIndex: 20,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: sectionBg,
          bottom: -1,
          left: 14,
          transform: hov ? "scale(1)" : "scale(0)",
          transformOrigin: "center bottom",
          transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function SecondaryButton({ children, onClick, className = "" }: SecondaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-[#CC624C] text-[#CC624C] font-extrabold rounded-full
      transition-all duration-200 whitespace-nowrap tracking-tight cursor-pointer
      hover:bg-[#CC624C] hover:text-white active:scale-95
      px-7 py-[10px] text-sm ${className}`}
    >
      {children}
    </button>
  );
}
