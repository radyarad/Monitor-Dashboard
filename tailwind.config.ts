// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  safelist: [
    // gradient yang dipakai di StatCard (main)
    "from-emerald-600",
    "to-emerald-700",
    // kalau kamu pakai prop gradient manual:
    "from-green-500",
    "to-green-600",
  ],
} satisfies Config;
