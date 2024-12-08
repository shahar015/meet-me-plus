const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  darkMode: ['selector', '[data-theme="dark-meet"]'],
  daisyui: {
    themes: [
      {
        'light-meet': {
          primary: '#4a90e2',
          secondary: '#54cfea',
          accent: '#88cffa',
          neutral: '#333333',
          'base-100': '#fcfcfc',
          info: '#00c4e8',
          success: '#28b463',
          warning: '#f48500',
          error: '#e11d48',
        },
      },
      {
        'dark-meet': {
          primary: '#1c6ea4',
          secondary: '#3282b8',
          accent: '#5e81ac',
          neutral: '#fcfcfc',
          'base-100': '#2e3440',
          info: '#88c0d0',
          success: '#8fbc8f',
          warning: '#ca8a04',
          error: '#9f1239',
        },
      },
    ],
  },
};
