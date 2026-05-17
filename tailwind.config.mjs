/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Navy scale — used for headlines, footer, logo background, strong text
        ink: {
          950: '#0F172A', // Navy (primary dark)
          900: '#1E293B', // Slate 800 — secondary dark surface (rare)
          800: '#334155', // Slate 700 — alias for body text
          700: '#475569', // Slate 600 — muted body on dark
          blue: '#0F172A',
        },
        // Brand emerald (single accent color)
        emerald: {
          DEFAULT: '#059669',
          dark: '#065F46',   // text on emerald-50 background
          light: '#10B981',  // hover state
          50: '#D1FAE5',     // subtle badge background
        },
        // Surfaces
        surface: '#F8FAFC',        // Off-white body background
        'surface-light': '#F8FAFC',
        // Text scale (light theme)
        'slate-text': '#334155',   // body text on off-white
        'slate-mute': '#64748B',
        muted: '#64748B',          // captions / subtext only — NOT body
        'slate-border': '#E2E8F0', // borders, dividers
        'slate-on-navy': '#CBD5E1',// body text on navy background (footer)
        // Backwards-compatible aliases so existing class usages keep rendering
        // with the new trust palette without component-wide refactor.
        'accent-blue': '#0F172A',  // → Navy
        'matte-blue': '#334155',   // → slate-text
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16,185,129,0.08), transparent 70%)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 1px 2px 0 rgba(15,23,42,0.04), 0 4px 16px -2px rgba(15,23,42,0.06)',
        'card': '0 1px 3px 0 rgba(15,23,42,0.06), 0 8px 24px -8px rgba(15,23,42,0.10)',
        'header': '0 1px 0 0 rgba(226,232,240,1), 0 6px 18px -6px rgba(15,23,42,0.08)',
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
