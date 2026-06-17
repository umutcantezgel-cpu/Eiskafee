import React from "react";
import * as Icons from "lucide-react";

interface ValueCardProps {
  icon: keyof typeof Icons;
  title: string;
  text: string;
}

export function ValueCard({ icon, title, text }: ValueCardProps) {
  const IconComponent = (Icons[icon] as React.ElementType) || Icons.Sparkles;

  return (
    <div className="hf-hover-lift bg-cream rounded-[22px] p-[30px_24px] shadow-[0_3px_14px_rgba(45,31,25,0.05)]">
      <div className="relative w-12 h-12 mb-4.5">
        <div className="w-12 h-12 bg-peach rounded-full flex items-center justify-center">
          <IconComponent size={22} strokeWidth={1.5} color="#CC624C" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-beige rounded-full border-2 border-[#F5EFE8]" />
      </div>
      <h3 className="font-heading text-[1.22rem] text-brown mb-2.5">{title}</h3>
      <p className="font-body text-[0.86rem] text-brown-muted leading-[1.7]">
        {text}
      </p>
    </div>
  );
}
