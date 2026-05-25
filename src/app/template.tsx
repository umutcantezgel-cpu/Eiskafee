"use client";

import { LiquidTransition } from "@/components/interactive/LiquidTransition";
import { SyrupCursor } from "@/components/interactive/SyrupCursor";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SyrupCursor />
      <LiquidTransition>{children}</LiquidTransition>
    </>
  );
}
