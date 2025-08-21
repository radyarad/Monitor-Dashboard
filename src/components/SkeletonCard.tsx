// components/SkeletonCard.tsx

import React from "react";

const SkeletonCard: React.FC<{ isMain?: boolean }> = ({ isMain = false }) => (
  <div
    className={`${
      isMain
        ? "bg-gradient-to-br from-gray-300 to-gray-400"
        : "bg-white border-2 border-gray-200"
    } rounded-2xl p-10 animate-pulse`}
  >
    <div className="flex items-center justify-between mb-10">
      <div className="w-12 h-12 bg-gray-400 rounded-xl" />
      <div className="w-20 h-6 bg-gray-400 rounded-full" />
    </div>
    <div className="w-32 h-16 bg-gray-400 rounded mb-4" />
    <div className="w-40 h-6 bg-gray-400 rounded" />
  </div>
);

export default SkeletonCard;
