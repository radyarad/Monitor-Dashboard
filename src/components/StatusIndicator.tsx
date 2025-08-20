import React from "react";
import { Wifi, WifiOff, RotateCcw } from "lucide-react";
import { ConnectionStatus } from "@/lib/types";

type Props = {
  status: ConnectionStatus;
};

const StatusIndicator: React.FC<Props> = ({ status }) => {
  const cfg = {
    online: {
      text: "text-green-600",
      bg: "bg-green-50",
      icon: Wifi,
      label: "Online",
      animate: "animate-pulse",
    },
    error: {
      text: "text-red-600",
      bg: "bg-red-50",
      icon: WifiOff,
      label: "Error",
      animate: "",
    },
    reconnecting: {
      text: "text-amber-600",
      bg: "bg-amber-50",
      icon: RotateCcw,
      label: "Reconnecting",
      animate: "animate-spin",
    },
  } as const;

  const c = cfg[status];
  const Icon = c.icon;

  return (
    <div
      className={`${c.text} text-xs font-medium px-2 py-1 rounded-full ${c.bg} flex items-center space-x-1`}
      aria-live="polite"
    >
      <Icon
        size={10}
        className={status === "online" ? "animate-pulse" : c.animate}
      />
      <span>{c.label}</span>
    </div>
  );
};

export default StatusIndicator;
