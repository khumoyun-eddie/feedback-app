/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#fff",
      red: {
        DEFAULT: "#D73737",
        light: "#E98888",
      },
      blue: {
        DEFAULT: "#4661E6",
        light: "#62BCFA",
      },
      purple: {
        DEFAULT: "#AD1FEA",
        light: "#C75AF6",
      },
      gray: {
        800: "#3A4374",
        700: "#373F68",
        600: "#647196",
        500: "#F2F4FF",
        400: "#F2F4FE",
        300: "#F7F8FD",
        200: "#888EB0",
        100: "#F8F8FB",
      },
    },
    fontSize: {
      sm: ["15px", { lineHeight: "22px"}],
      xs: ["13px",{lineHeight: "19px",}],
      base: ["16px",{lineHeight: "23px" },],
      'h4':['14px',{ lineHeight: "20px", letterSpacing: "-0.2px" }],
      'h3':['18px',{ lineHeight: "26px", letterSpacing: "-0.25px" }],
      lg: ["20px", { lineHeight: "29px", letterSpacing: "-0.25px" }],
      xl: ["24px", { lineHeight: "35px", letterSpacing: "-0.33px" }],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)'
      }
    },
  },
  plugins: [],
};
