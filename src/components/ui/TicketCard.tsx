import React from "react";

interface TicketCardProps {
  children: React.ReactNode;
  sectionBg?: string;
  className?: string;
}

export function TicketCard({
  children,
  sectionBg = "#f5efe8",
  className = "",
}: TicketCardProps) {
  return (
    <div
      className={`relative border-2 border-dashed border-[#CC624C] rounded-2xl bg-white overflow-visible ${className}`}
      style={{ margin: "0 14px" }}
    >
      {/* Left perforation hole */}
      <div
        style={{
          position: "absolute",
          left: -13,
          top: "50%",
          transform: "translateY(-50%)",
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: sectionBg,
          border: "2px dashed #E4C0A8",
        }}
      />
      {/* Right perforation hole */}
      <div
        style={{
          position: "absolute",
          right: -13,
          top: "50%",
          transform: "translateY(-50%)",
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: sectionBg,
          border: "2px dashed #E4C0A8",
        }}
      />
      <div style={{ padding: "24px 28px" }}>{children}</div>
    </div>
  );
}
