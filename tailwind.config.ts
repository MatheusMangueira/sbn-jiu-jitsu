import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        suburbio: ['Dancing Script', 'cursive'],
      },

      colors: {
        primary: '#212121',
        base: '#E4E4E4',
      }
    },
  },
  plugins: [],
}
export default config
