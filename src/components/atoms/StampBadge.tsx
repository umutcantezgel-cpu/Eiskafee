import React from "react";

type StampVariant = "terracotta" | "brown";

interface StampBadgeProps {
  label: string;
  variant?: StampVariant;
  size?: number;
  className?: string;
  rotate?: number;
}

export function StampBadge({
  label,
  variant = "terracotta",
  size = 86,
  className = "",
  rotate,
}: StampBadgeProps) {
  const defaultRotation = variant === "terracotta" ? 14 : -9;
  const finalRotation = rotate !== undefined ? rotate : defaultRotation;

  const strokeColor = variant === "terracotta" ? "#b34832" : "#5c3d35";

  // Calculate center and radius based on size
  const center = size / 2;
  const radius = center - 3;
  const pathId = `sb-${label}-${size}`;

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        transform: `rotate(${finalRotation}deg)`,
      }}
    >
      <svg viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path
            id={pathId}
            d={`M${center},${center} m-${radius},0 a${radius},${radius} 0 1,1 ${radius * 2},0 a${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <circle
          cx={center}
          cy={center}
          r={radius - 3}
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeDasharray="3.5 2.5"
        />
        <text
          fontSize="9"
          fontFamily="var(--font-nunito), sans-serif"
          fontWeight="800"
          fill={strokeColor}
          letterSpacing="2"
        >
          <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
            {label}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
