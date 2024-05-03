import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
    borderRadius: {
      'none': '0',
      'sm': '0.5rem',
      DEFAULT: '0.25rem',
      'md': '1rem',
      'lg': '1.5rem',
      'full': '9999px',
      'large': '12px',
    }
  },
  plugins: [],
};
export default config;
