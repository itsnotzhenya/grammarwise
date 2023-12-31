/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    fontFamily: {
      poppins: 'Poppins',
      manrope: 'Manrope',
    },
    fontSize: {
      xs: [
        '14px',
        {
          fontWeight: 700,
          lineHeight: '21px',
        },
      ],
      sm: [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: 400,
        },
      ],
      base: [
        '18px',
        {
          fontWeight: 500,
          lineHeight: '24px',
        },
      ],
      md: [
        '21px',
        {
          fontWeight: 700,
        },
      ],
      lg: [
        '32px',
        {
          fontWeight: 700,
          lineHeight: '48px',
        },
      ],
      xl: [
        '48px',
        {
          fontWeight: 700,
          lineHeight: '72px',
        },
      ],
      '2xl': [
        '62px',
        {
          fontWeight: 800,
          lineHeight: '120%',
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
