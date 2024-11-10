import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        konkhmer: ['"Konkhmer Sleokchher"', 'sans-serif'],
        inder: ['"Inder"', 'sans-serif'],
        sourceSans: ['"Source Sans 3"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      fontSize: {
        '32': '32px',
        '24':'24px',
        '16':'16px'
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      backgroundImage: {
        'custom-radial': 'radial-gradient(circle 600px at 473px 552px, rgba(29, 78, 216, 0.15), transparent 80%)',
      },

      
    },
  },
  plugins: [],
};
export default config;
