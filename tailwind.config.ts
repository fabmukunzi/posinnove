import type { Config } from 'tailwindcss';

const config: Config = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#091e6a',
      },
    },
  },
  plugins: [],
};
export default config;
