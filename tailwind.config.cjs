/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },

    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },

      colors: {
        // ── Primary – modern, trustworthy blue (main brand color) ────────────────
        primary: {
          50:  '#f0f7ff',
          100: '#e0f0fe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36aefb',
          500: '#0a95e8',      // Main primary – vivid yet professional
          600: '#0878c2',
          700: '#07609c',
          800: '#084f80',
          900: '#0a4269',
          950: '#052b45',      // Added for very dark states (e.g. dark mode)
          DEFAULT: '#0a95e8',
          foreground: '#ffffff',
        },

        // Secondary – softer complementary blue for hover/states
        secondary: {
          DEFAULT: '#3b82f6',
          foreground: '#ffffff',
        },

        // Accent – used **only** for urgent/important highlights
        accent: {
          DEFAULT: '#fef200',
          foreground: '#1e293b',
        },

        // Neutral – warm, pleasant gray scale (better readability)
        neutral: {
          50:  '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },

        // Background & surface
        background: '#ffffff',
        surface: {
          DEFAULT: '#f9fafb',
          subtle: '#f0f5ff',   // very light blue tint for sections
        },

        muted: {
          DEFAULT: '#e5e7eb',
          foreground: '#6b7280',
        },

        border: '#d1d5db',
        input: '#d1d5db',
        ring: '#0a95e8',

        foreground: '#111827',
        'foreground-muted': '#4b5563',
        'foreground-subtle': '#6b7280',

        // Status colors (used sparingly)
        success: {
          DEFAULT: '#10b981',
          foreground: '#ffffff',
        },
        warning: {
          DEFAULT: '#f59e0b',
          foreground: '#ffffff',
        },
        danger: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },

        // shadcn/ui compatibility
        card: {
          DEFAULT: '#ffffff',
          foreground: '#111827',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#111827',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
      },

      borderRadius: {
        lg: '0.625rem',   // 10px – soft but clean
        md: '0.5rem',     // 8px – most cards/buttons
        sm: '0.375rem',   // 6px – small elements
        DEFAULT: '0.5rem',
      },

      spacing: {
        4.5: '1.125rem',
        7: '1.75rem',
        8.5: '2.125rem',
        9: '2.25rem',
        11: '2.75rem',
      },

      // Very restrained animations – only when truly functional
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-in-down': {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.35s ease-out forwards',
        'accordion-down': 'fade-in-down 0.2s ease-out',
        'accordion-up': 'fade-in 0.2s ease-out reverse',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}