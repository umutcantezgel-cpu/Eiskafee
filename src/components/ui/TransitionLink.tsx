"use client";

import React from "react";
import { useTransition } from "./TransitionProvider";
import Link from "next/link";

export function TransitionLink({ href, children, onClick, className, style }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const { navigate } = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </Link>
  );
}
