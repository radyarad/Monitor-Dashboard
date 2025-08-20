import React from "react";
import { RotateCcw, WifiOff } from "lucide-react";
import { ConnectionStatus } from "@/lib/types";

type Props = {
  status: ConnectionStatus;
};

const ErrorBanner: React.FC<Props> = ({ status }) => {
  if (status === "online") return null;

  const cfg = {
    error: {
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
      icon: WifiOff,
      message: "Koneksi terputus. Mencoba menghubungkan kembali...",
    },
    reconnecting: {
      bg: "bg-amber-100",
      text: "text-amber-800",
      border: "border-amber-200",
      icon: RotateCcw,
      message: "Menghubungkan kembali ke server...",
    },
  } as const;

  const c = cfg[status as keyof typeof cfg];
  const Icon = c.icon;

  return (
    <div
      className={`${c.bg} ${c.text} ${c.border} border rounded-xl p-3 mb-6 flex items-center justify-center`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center space-x-3">
        <Icon
          size={16}
          className={status === "reconnecting" ? "animate-spin" : ""}
        />
        <span className="font-medium text-sm">{c.message}</span>
      </div>
    </div>
  );
};

export default ErrorBanner;
