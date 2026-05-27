"use client";

import React, { useRef } from 'react';
import { useAchievements } from '@/store/useAchievements';
import {
  LogoOrange,
  LogoBeige,
  LogoHellbeige,
  LogoRundBeige,
  LogoWortmarkeBeige,
  FormBeige
} from '@/assets/svg';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type LogoVariant = 'orange' | 'beige' | 'hellbeige' | 'rund' | 'wortmarke' | 'form';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: LogoVariant;
  pulse?: boolean;
}

export function Logo({ variant = 'orange', pulse = false, className, onClick, ...props }: LogoProps) {
  const clicks = useRef<number[]>([]);

  const handleTap = (e: React.MouseEvent<SVGSVGElement>) => {
    const now = Date.now();
    clicks.current.push(now);
    clicks.current = clicks.current.filter(t => now - t <= 500);

    if (clicks.current.length >= 3) {
      const unlock = useAchievements.getState().unlock;
      unlock('sweet-tooth');
      clicks.current = [];
    }

    if (onClick) onClick(e);
  };

  let SvgIcon = LogoOrange;
  let ratio = "429.455 / 444.526"; // Default normal logo ratio

  switch (variant) {
    case 'beige':
      SvgIcon = LogoBeige;
      break;
    case 'hellbeige':
      SvgIcon = LogoHellbeige;
      break;
    case 'rund':
      SvgIcon = LogoRundBeige;
      ratio = "1 / 1";
      break;
    case 'wortmarke':
      SvgIcon = LogoWortmarkeBeige;
      ratio = "627.846 / 159.151";
      break;
    case 'form':
      SvgIcon = FormBeige;
      ratio = "1 / 1"; // Assuming form is roughly square, or use normal logo ratio if unknown
      break;
    case 'orange':
    default:
      SvgIcon = LogoOrange;
      break;
  }

  return (
    <SvgIcon
      onClick={handleTap}
      style={{ aspectRatio: ratio }}
      className={twMerge(
        "cursor-pointer transition-transform active:scale-95",
        pulse && "animate-fede-pulse",
        className
      )}
      {...props}
    />
  );
}
