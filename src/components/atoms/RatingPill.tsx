import React from "react";
import { twMerge } from "tailwind-merge";
import { StarRating } from "./StarRating";

interface RatingPillProps {
  score: number;
  reviewCount: number;
  className?: string;
}

export function RatingPill({ score, reviewCount, className }: RatingPillProps) {
  const formattedScore = score.toString().replace(".", ",");
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 !== 0;

  return (
    <div
      className={`hf-rating inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-sand ${className || ""}`}
    >
      <span className="hf-stars text-orange">
        {"★".repeat(fullStars)}
        {hasHalfStar && <span className="hf-star-half">★</span>}
      </span>
      <b className="text-sm text-charcoal">{formattedScore}</b>
      {reviewCount > 1 && (
        <i className="text-xs text-brown not-italic">
          · {reviewCount} Bewertungen
        </i>
      )}
    </div>
  );
}
