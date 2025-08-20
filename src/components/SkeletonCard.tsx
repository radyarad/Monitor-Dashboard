import React from "react";

const SkeletonCard: React.FC<{ isMain?: boolean }> = ({ isMain = false }) => (
  <div
    className={`${
      isMain
        ? "bg-gradient-to-br from-gray-200 to-gray-300"
        : "bg-white border-2 border-gray-100"
    } rounded-2xl p-6 animate-pulse`}
  >
    <div className="flex items-center justify-between mb-6">
      <div className="w-8 h-8 bg-gray-300 rounded-lg" />
      <div className="w-16 h-5 bg-gray-300 rounded-full" />
    </div>
    <div className="w-24 h-12 bg-gray-300 rounded mb-3" />
    <div className="w-32 h-4 bg-gray-300 rounded" />
  </div>
);

export default SkeletonCard;
