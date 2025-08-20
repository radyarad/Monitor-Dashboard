import React from "react";
import StatusIndicator from "./StatusIndicator";
import SkeletonCard from "./SkeletonCard";
import { ConnectionStatus } from "@/lib/types";

type Props = {
  title: string;
  value: number;
  icon: React.ElementType;
  isMain?: boolean;
  gradient?: string; // contoh: "from-green-500 to-green-600"
  isLoading?: boolean;
  status: ConnectionStatus;
};

const StatCard: React.FC<Props> = ({
  title,
  value,
  icon: Icon,
  isMain = false,
  gradient,
  isLoading = false,
  status,
}) => {
  if (isLoading) return <SkeletonCard isMain={isMain} />;

  // fallback gradient yang selalu ada
  const mainGradient = gradient || "from-emerald-600 to-emerald-700";

  return (
    <div
      className={`${
        isMain
          ? `bg-gradient-to-br ${mainGradient} text-white shadow-xl`
          : "bg-white border-2 border-gray-100 hover:border-emerald-200 shadow-sm hover:shadow-md"
      } rounded-2xl p-8 transition-all duration-300`}
      aria-label={`${title}: ${value} orang`}
    >
      <div className="flex items-center justify-between mb-8">
        <div
          className={`p-4 rounded-xl ${
            isMain
              ? // Ikon benar‑benar putih + latar semi transparan agar kontras
                "bg-white/20 text-white ring-1 ring-white/20"
              : "bg-emerald-50 text-emerald-700"
          }`}
          aria-hidden="true"
        >
          {/* Lucide mengikuti currentColor → putih di main card */}
          <Icon size={isMain ? 36 : 28} strokeWidth={2.25} />
        </div>
        <StatusIndicator status={status} />
      </div>

      <div
        className={`text-5xl font-bold mb-4 ${
          isMain ? "text-white" : "text-gray-800"
        }`}
        role="status"
        aria-live="polite"
      >
        {value.toLocaleString("id-ID")}
      </div>

      <div
        className={`${
          isMain ? "text-white/90" : "text-gray-600"
        } text-base font-medium`}
      >
        {title}
      </div>
    </div>
  );
};

export default StatCard;
