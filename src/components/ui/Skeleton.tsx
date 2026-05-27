import React from 'react';

export const ProductSkeleton: React.FC = () => {
  return (
    <div className="bg-white/60 rounded-[18px] p-[16px_18px] flex gap-3.5 items-center shadow-sm animate-pulse">
      {/* Icon Placeholder */}
      <div className="w-[68px] h-[68px] rounded-full bg-[#eedfcc] shrink-0" />

      {/* Content Placeholder */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2 mb-2">
          <div className="w-1/2 h-5 bg-[#eedfcc] rounded-md" />
          <div className="w-12 h-5 bg-[#eedfcc] rounded-md shrink-0" />
        </div>
        <div className="w-3/4 h-3 bg-[#eedfcc]/60 rounded-md mb-1.5" />
        <div className="w-1/2 h-3 bg-[#eedfcc]/60 rounded-md" />
      </div>

      {/* Action Placeholder */}
      <div className="flex flex-col items-end justify-between self-stretch py-1">
        <div className="w-10 h-4 bg-[#eedfcc] rounded-full mb-auto" />
        <div className="w-8 h-8 rounded-full bg-[#eedfcc] shrink-0 mt-2" />
      </div>
    </div>
  );
};

export const BoxSkeleton: React.FC = () => {
  return (
    <div className="bg-white/60 border-2 border-dashed border-[#eedfcc] rounded-xl p-[20px_22px] relative shadow-sm animate-pulse mx-3">
      {/* Perforation holes */}
      <div className="absolute -left-[11px] top-1/2 -translate-y-1/2 w-[22px] h-[22px] rounded-full bg-[#f5efe8] border-2 border-dashed border-[#eedfcc]" />
      <div className="absolute -right-[11px] top-1/2 -translate-y-1/2 w-[22px] h-[22px] rounded-full bg-[#f5efe8] border-2 border-dashed border-[#eedfcc]" />

      <div className="flex gap-3.5 items-start">
        {/* Icon Placeholder */}
        <div className="w-[74px] h-[74px] rounded-full bg-[#eedfcc] shrink-0" />
        
        {/* Content Placeholder */}
        <div className="flex-1">
          <div className="w-2/3 h-6 bg-[#eedfcc] rounded-md mb-2" />
          <div className="w-full h-3 bg-[#eedfcc]/60 rounded-md mb-1.5" />
          <div className="w-4/5 h-3 bg-[#eedfcc]/60 rounded-md mb-4" />
          
          <div className="flex items-center justify-between mt-3">
            <div className="w-16 h-7 bg-[#eedfcc] rounded-md" />
            <div className="w-24 h-8 rounded-full bg-[#eedfcc]" />
          </div>
        </div>
      </div>
    </div>
  );
};
