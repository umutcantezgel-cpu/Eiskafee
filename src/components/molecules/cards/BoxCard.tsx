import React from "react";
import { twMerge } from "tailwind-merge";
import { TicketPerforation } from "@/components/atoms/TicketPerforation";
import { EyebrowPill } from "@/components/atoms/EyebrowPill";
import { Plus, Minus } from "lucide-react";

interface BoxCardProps {
  title: string;
  desc?: string;
  price?: string;
  icon?: React.ReactNode;
  isNew?: boolean;
  className?: string;
  quantity?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onClick?: () => void;
}

export function BoxCard({
  title,
  desc,
  price,
  icon,
  isNew,
  className,
  quantity = 0,
  onIncrement,
  onDecrement,
  onClick,
}: BoxCardProps) {
  const isClickable = onClick && quantity === 0;

  return (
    <div
      onClick={isClickable ? onClick : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      className={twMerge(
        "relative flex items-center p-4 bg-cream rounded-xl border-2 border-dashed border-terracotta/40",
        isClickable && "cursor-pointer",
        "transition-all duration-300 hover:border-terracotta hover:shadow-clay",
        className,
      )}
    >
      <TicketPerforation position="left" fillClass="text-sand" />
      <TicketPerforation position="right" fillClass="text-sand" />

      {icon && (
        <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center text-terracotta mr-4">
          {icon}
        </div>
      )}

      <div className="flex-grow flex flex-col justify-center py-1">
        <div className="flex items-center gap-3 mb-1">
          <h3
            className="font-heading text-xl text-charcoal"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {isNew && <EyebrowPill label="NEU" statusColor="bg-peach" />}
        </div>
        {desc && (
          <p className="text-sm text-charcoal/70 line-clamp-2">{desc}</p>
        )}
      </div>

      {price && (
        <div className="flex-shrink-0 ml-4 flex items-center gap-3">
          <span className="font-bold text-lg text-terracotta whitespace-nowrap">
            {price}
          </span>

          {quantity > 0 ? (
            <div
              className="flex items-center gap-2 bg-white rounded-full p-1 border border-peach"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDecrement?.();
                }}
                className="w-7 h-7 flex items-center justify-center bg-cream rounded-full text-charcoal hover:bg-peach/50 transition-colors"
                aria-label="Menge reduzieren"
              >
                <Minus size={14} />
              </button>
              <span className="font-bold text-sm w-4 text-center">
                {quantity}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onIncrement?.();
                }}
                className="w-7 h-7 flex items-center justify-center bg-terracotta rounded-full text-white hover:bg-brown transition-colors"
                aria-label="Menge erhöhen"
              >
                <Plus size={14} />
              </button>
            </div>
          ) : (
            <div className="bg-terracotta text-white p-2 rounded-full hover:bg-brown transition-colors shadow-sm">
              <Plus size={18} strokeWidth={2.5} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
