/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0a',
          900: '#111113',
          800: '#1a1a1d',
          700: '#27272a',
          blue: '#0f2744',
        },
        emerald: {
          DEFAULT: '#10b981',
          dark: '#059669',
          light: '#34d399',
        },
        gold: {
          DEFAULT: '#C8A24B',
          dark: '#a8842e',
        },
        muted: '#a1a1aa',
        surface: '#f9fafb',
        'matte-blue': '#1e3a5f',
        'surface-light': '#f8fafc',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16,185,129,0.18), transparent), radial-gradient(ellipse 60% 40% at 20% 30%, rgba(16,185,129,0.08), transparent), radial-gradient(ellipse 50% 40% at 90% 70%, rgba(200,162,75,0.06), transparent)',
        'mesh-dark':
          'radial-gradient(circle at 20% 10%, rgba(16,185,129,0.10), transparent 40%), radial-gradient(circle at 80% 60%, rgba(200,162,75,0.05), transparent 50%)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
