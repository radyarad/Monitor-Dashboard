import React from "react";
import StatusIndicator from "./StatusIndicator";
import SkeletonCard from "./SkeletonCard";
import { ConnectionStatus } from "@/lib/types";

type Props = {
  title: string;
  value: number;
  icon: React.ElementType;
  isMain?: boolean;
  gradient?: string;
  color?: string; // solid color utk kategori non-main
  isLoading?: boolean;
  status: ConnectionStatus;
};

const StatCard: React.FC<Props> = ({
  title,
  value,
  icon: Icon,
  isMain = false,
  gradient,
  color,
  isLoading = false,
  status,
}) => {
  if (isLoading) return <SkeletonCard isMain={isMain} />;

  const mainGradient = gradient || "from-emerald-600 to-emerald-700";

  return (
    <div
      className={`${
        isMain
          ? `bg-gradient-to-br ${mainGradient} text-white shadow-xl`
          : `${color || "bg-gray-800 text-white"} shadow-lg`
      } rounded-2xl p-8 transition-all duration-300`}
      aria-label={`${title}: ${value} orang`}
    >
      {/* Icon + Status */}
      <div className="flex items-center justify-between mb-8">
        <div
          className={`p-4 rounded-xl ${
            isMain
              ? "bg-white/20 text-white ring-1 ring-white/20"
              : "bg-black/20 text-white"
          }`}
        >
          <Icon size={isMain ? 40 : 32} strokeWidth={2.25} />
        </div>
        <StatusIndicator status={status} />
      </div>

      {/* Value */}
      <div className="text-6xl font-extrabold mb-4 [font-family:var(--font-roboto)]">
        {value.toLocaleString("id-ID")}
      </div>

      {/* Title */}
      <div className="text-2xl font-bold tracking-wide [font-family:var(--font-montserrat)]">
        {title}
      </div>
    </div>
  );
};

export default StatCard;
