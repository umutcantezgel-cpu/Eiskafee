"use client";

import React from "react";
import { TransitionLink } from "@/components/ui/TransitionLink";

export function PrimaryButton({
  children,
  onClick,
  href,
  large = false,
  sectionBg = "#F5EFE8",
  className = "",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: (e?: any) => void;
  href?: string;
  large?: boolean;
  sectionBg?: string;
  className?: string;
  disabled?: boolean;
}) {
  const isLink = href && !disabled;
  const Component = isLink ? "div" : "button";
  const inner = (
    <span
      className={`hf-btn-wrap ${className}`}
      style={{ "--bite": sectionBg } as React.CSSProperties}
    >
      <Component
        onClick={!isLink ? onClick : undefined}
        disabled={disabled}
        className={`hf-btn-primary ${large ? "text-lg px-8 py-4" : ""} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      >
        {children}
      </Component>
    </span>
  );

  return isLink ? (
    <div
      onClick={onClick}
      className="inline-block"
      style={{ textDecoration: "none" }}
    >
      <TransitionLink
        href={href}
        style={{ textDecoration: "none" }}
        className="inline-block"
      >
        {inner}
      </TransitionLink>
    </div>
  ) : (
    inner
  );
}

export function SecondaryButton({
  children,
  onClick,
  href,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}) {
  const Component = href ? "div" : "button";
  const inner = (
    <Component onClick={onClick} className={`hf-btn-secondary ${className}`}>
      {children}
    </Component>
  );

  return href ? (
    <TransitionLink
      href={href}
      style={{ textDecoration: "none" }}
      className="inline-block"
    >
      {inner}
    </TransitionLink>
  ) : (
    inner
  );
}
