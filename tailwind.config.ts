import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        display: ["Plus Jakarta Sans", ...fontFamily.sans],
      },
      colors: {
        primary: "hsl(262 83% 58%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
