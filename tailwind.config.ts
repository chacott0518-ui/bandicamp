import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f9f7f3',
        forest: '#1a2818',
        'forest-deep': '#080f08',
        'forest-light': '#2d4a2d',
        gold: '#c9a84c',
        'gold-light': '#e8c96a',
        ink: '#1a1a1a',
        muted: '#6b7280',
        border: '#e8e4dc',
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      screens: {
        xs: '390px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
export default config
