/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'erp-primary-600': '#7f56d9',
        'erp-primary-700': '#6a3dc4',
        'erp-primary-800': '#5933a4',
        'erp-primary-900': '#4a2b87',
        'erp-primary-950': '#2d1a5b',
        
        'erp-gray-50': '#F9FAFB',
        'erp-gray-100': '#F2F4F7',
        'erp-gray-200': '#EAECF0',
        'erp-gray-300': '#9BB0C1',
        'erp-gray-400': '#97a1b2',
        'erp-gray-500': '#667085',
        'erp-gray-700': '#344054',
        'erp-gray-900': '#101828',
  
        'erp-warning-100': '#FEF3F1',
        'erp-warning-700': '#F04438',
        'erp-warning-800': '#D92D20',
        'erp-warning-900': '#B42318',

        'erp-error-50': '#FEF3F2',
        'erp-error-100': '#FEE4E2',
        'erp-error-600': '#D92D20',
      },
      backgroundImage: {
        'hero-section': "url('assets/images/bg.svg')",
        'hero-ticket': "url('assets/images/ticket-block.png')",
        'kanban': "url('assets/images/kanban.png')",
        'icon1': "url('assets/images/folder.svg')",
        'icon2': "url('assets/images/meetings.svg')",
        'icon3': "url('assets/images/onboarding.svg')",
        'icon4': "url('assets/images/task.svg')",
        'upload': "url('assets/images/upload.svg')",
        'avatar': "url('assets/images/avatar-sample.svg')",
        'bg-create-workspace': "url('assets/images/bg-workspace.png')",
        'img-workspace': "url('assets/images/workspace-img')",
        }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
}