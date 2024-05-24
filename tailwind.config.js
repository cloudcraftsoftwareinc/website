module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/images/banner-bg.png')",
      },
      colors: {
        primary: {
          // azure radiance
          50: '#eff2ff',
          100: '#dce3fd',
          200: '#c0cefd',
          300: '#95aefb',
          400: '#5479f7',
          500: '#3e5bf3',
          600: '#283ae8',
          700: '#2027d5',
          800: '#2022ad',
          900: '#202488',
          950: '#181853',
        },
        azure: {
          // azure radiance
          50: '#eff2ff',
          100: '#dce3fd',
          200: '#c0cefd',
          300: '#95aefb',
          400: '#5479f7',
          500: '#3e5bf3',
          600: '#283ae8',
          700: '#2027d5',
          800: '#2022ad',
          900: '#202488',
          950: '#181853',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};
