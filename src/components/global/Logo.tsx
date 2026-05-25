import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 64, className = "" }: LogoProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: "#CC624C",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 14px rgba(204,98,76,0.22)",
        flexShrink: 0,
      }}
      className={className}
    >
      <span
        style={{
          fontFamily: "Calistoga,serif",
          fontSize: size * 0.44,
          color: "#fefefe",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          marginLeft: size * -0.04,
        }}
      >
        F!
      </span>
    </div>
  );
}
