import React from 'react';
import { FormBeige } from '@/assets/svg';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ScallopBadgeProps {
  size?: number | string;
  fillClass?: string;
  rotate?: number;
  className?: string;
  children?: React.ReactNode;
}

export function ScallopBadge({ 
  size = 120, 
  fillClass = 'text-sand', 
  rotate = 0, 
  className, 
  children 
}: ScallopBadgeProps) {
  return (
    <div 
      className={twMerge("relative flex items-center justify-center", className)}
      style={{ 
        width: size, 
        height: size, 
        transform: `rotate(${rotate}deg)` 
      }}
    >
      <FormBeige className={clsx("absolute inset-0 w-full h-full", fillClass)} />
      <div 
        className="relative z-10 flex items-center justify-center text-center"
        style={{ transform: `rotate(${-rotate}deg)` }} // Counter-rotate content so it stays upright
      >
        {children}
      </div>
    </div>
  );
}
