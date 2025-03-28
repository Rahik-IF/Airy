/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'diligent': '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        primary: {
          DEFAULT: '#b7601b', // Main primary color
          light: '#e3751d', // Lighter shade for hover effects
          dark: '#4c2200', // Darker shade for active states
        },
        secondary: {
          DEFAULT: '#145858', // Cool and professional blue for contrast
          light: '#427979',   // Lighter shade for hover effects
          dark: '#0a2c2c',    // Darker shade for active states
        },
        background: {
          DEFAULT: '#F9FAFB', // Background color
          dark: '#111827', // Dark background for dark mode
        },
        text: {
          primary: '#111827', // Primary text color
          secondary: '#6B7280', // Secondary text color
          light: '#9CA3AF', // Lighter text for placeholders, etc.
        },
        accent: '#10B981', // Accent color for buttons, highlights, etc.
        error: '#EF4444', // Error color for alerts or validation
        success: '#22C55E', // Success color for confirmations
      },
      screens: {
        '370': '370px',
        '400': '400px',
        '450': '450px',
        '451': '454px',
        '460': '460px',
        '470': '470px',
        '480': '480px',
        '490': '490px',
        '500': '500px',
        '550': '550px',
        '580': '580px',
        '600': '600px',
        '660': '660px',
        '700': '700px',
        '750': '750px',
        '770': '770px',
        '800': '800px',
        '813': '813px',
        '850': '850px',
        '880': '880px',
        '950': '950px',
        '1000': '1000px',
        '1100': '1100px',
        '1150': '1150px',
        '1200': '1200px',
        '1300': '1300px',
        '1400': '1400px',
        '1450': '1450px',
        '1480': '1480px',
        '1800': '1800px',
      },
    },
    container: {
      center: true
    }
  },
  plugins: [],
};
