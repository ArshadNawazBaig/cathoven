import type { Config } from "tailwindcss";

// text-xs = {
//   font-size: 0.75rem;            12px
//   line-height: 1rem;             16px
// }
// text-sm = {
//   font-size: 0.875rem;           14px;
//   line-height: 1.25rem;          20px;
// }
// text-base = {
//   font-size: 1rem                16px;
//   line-height: 1.5rem            24px;
// }
// font-normal	font-weight:         400;
// text-medium =                    500;
// font-semibold	font-weight:       600;
// font-bold	font-weight:           700;
// font-extrabold	font-weight:     800;
// font-black	font-weight:         900;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "xxs": [
        "0.688rem", // 11 px
        {
          lineHeight: "0.813rem", // 13px
          fontWeight: "500",
        },
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#141618",
        secondary: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
export default config;
