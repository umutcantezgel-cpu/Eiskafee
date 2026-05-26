import React from 'react';

export const SkeletonCard: React.FC = () => {
  return (
    <div className="animate-pulse flex flex-col bg-gray-100 rounded-3xl p-4 shadow-sm w-full h-[340px]">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-200 rounded-2xl mb-4"></div>
      
      {/* Title Placeholder */}
      <div className="w-3/4 h-6 bg-gray-200 rounded-lg mb-2"></div>
      
      {/* Description / Subtitle Placeholder */}
      <div className="w-1/2 h-4 bg-gray-200 rounded-lg mb-4"></div>
      
      {/* Footer / Price & Button Placeholder */}
      <div className="mt-auto flex justify-between items-center">
        <div className="w-1/4 h-6 bg-gray-200 rounded-lg"></div>
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};
