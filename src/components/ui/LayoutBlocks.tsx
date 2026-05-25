import React from "react";

export function SectionTitle({ children, sub, center = true, light = false }: { children: React.ReactNode, sub?: string, center?: boolean, light?: boolean }) {
  return (
    <div className={`mb-10 md:mb-12 ${center ? 'text-center' : ''}`}>
      <h2 style={{ fontFamily: 'var(--font-calistoga), serif', fontSize: 'clamp(1.7rem,4vw,2.8rem)',
        color: light ? '#f5efe8' : '#2d1f19', lineHeight: 1.1, marginBottom: 8 }}>
        {children}
      </h2>
      {sub && <p style={{ fontSize: '0.92rem', color: light ? 'rgba(245,239,232,0.75)' : '#9a7060',
        maxWidth: 440, margin: center ? '0 auto' : 0, lineHeight: 1.65 }}>{sub}</p>}
    </div>
  );
}

export function StampBadge({ text, size = 88, rotate = -12, color = '#CC624C' }: { text: string, size?: number, rotate?: number, color?: string }) {
  const id = `sb-${text.replace(/\\W/g,'')}-${size}`;
  const r = size / 2 - 10;
  return (
    <div style={{ width: size, height: size, flexShrink: 0, transform: `rotate(${rotate}deg)` }}>
      <svg viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id={id} d={`M${size/2},${size/2} m-${r},0 a${r},${r} 0 1,1 ${r*2},0 a${r},${r} 0 1,1 -${r*2},0`} />
        </defs>
        <circle cx={size/2} cy={size/2} r={size/2-3} fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="3.5 2.5" />
        <text fontSize="9" fontFamily="var(--font-nunito), sans-serif" fontWeight="800" fill={color} letterSpacing="2">
          <textPath href={`#${id}`} startOffset="50%" textAnchor="middle">{text.toUpperCase()}</textPath>
        </text>
      </svg>
    </div>
  );
}

export function TicketCard({ children, sectionBg = '#f5efe8', className = '' }: { children: React.ReactNode, sectionBg?: string, className?: string }) {
  return (
    <div className={`relative border-2 border-dashed border-[#CC624C] rounded-2xl bg-white overflow-visible ${className}`}
      style={{ margin: '0 14px' }}>
      <div style={{ position: 'absolute', left: -13, top: '50%', transform: 'translateY(-50%)',
        width: 26, height: 26, borderRadius: '50%', background: sectionBg, border: '2px dashed #E4C0A8' }} />
      <div style={{ position: 'absolute', right: -13, top: '50%', transform: 'translateY(-50%)',
        width: 26, height: 26, borderRadius: '50%', background: sectionBg, border: '2px dashed #E4C0A8' }} />
      <div style={{ padding: '24px 28px' }}>{children}</div>
    </div>
  );
}
