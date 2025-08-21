// tailwind.config.ts
import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  safelist: [
    "from-emerald-600",
    "to-emerald-700",
    "from-green-500",
    "to-green-600",
  ],
};

export default config as Config;
