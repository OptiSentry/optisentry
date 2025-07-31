import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:"#f3f7ff",100:"#e6efff",200:"#c7dbff",300:"#9abaff",400:"#6a95ff",
          500:"#3f70ff",600:"#2c56db",700:"#2344ad",800:"#1d3a8a",900:"#172f6b"
        }
      }
    }
  },
  plugins: [],
} satisfies Config;
