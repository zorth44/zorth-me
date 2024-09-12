import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'pre code': {
              color: 'inherit',
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
              color: theme('colors.gray.100'),
              overflowX: 'auto',
              fontSize: '0.875em',
              borderRadius: theme('borderRadius.lg'),
              padding: theme('spacing.4'),
            },
            '.highlighted': {
              backgroundColor: 'rgb(71 85 105 / 0.2)',
              borderLeft: '2px solid #60a5fa',
              paddingLeft: '0.75rem',
            },
            '.word': {
              padding: '0.25rem',
              borderRadius: '0.25rem',
              backgroundColor: 'rgb(71 85 105 / 0.2)',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.200'),
              border: `1px solid ${theme('colors.gray.700')}`,
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.200'),
            },
          },
        },
      }),
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require('@tailwindcss/typography'),
  ],
}
