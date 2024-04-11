/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'erp-primary-600': '#7F56D9',
      'erp-primary-700': '#6941C6',

      'erp-gray-100': '#F2F4F7',
      'erp-gray-300': '#9BB0C1',
      'erp-gray-500': '#667085',
      'erp-gray-700': '#344054',
      'erp-gray-900': '#101828',

      'erp-warning-100': '#FEF3F1',
      'erp-warning-700': '#F04438',
      'erp-warning-800': '#D92D20',
      'erp-warning-900': '#B42318',
    },
    extend: {},
  },
  plugins: [],
}