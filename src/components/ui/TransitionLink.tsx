"use client";

import React from "react";
import { useTransition } from "./TransitionProvider";
import Link from "next/link";

export function TransitionLink({ href, children, onClick, className, style }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  // Bypassing useTransition to prevent hanging/delays. Just use pure Next.js Link.
  return (
    <Link href={href} onClick={onClick} className={className} style={style}>
      {children}
    </Link>
  );
}
