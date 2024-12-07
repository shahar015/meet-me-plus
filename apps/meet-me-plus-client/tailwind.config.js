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
  plugins: [require('daisyui')],
  darkMode: ['selector', '[data-theme="dark-meet"]'],
  daisyui: {
    themes: [
      {
        'light-meet': {
          primary: '#09bbe2',
          secondary: '#54cfea',
          accent: '#f4fcfe',
          neutral: '#090909',
          'base-100': '#fff6ec',
          info: '#00d6ff',
          success: '#00a900',
          warning: '#f48500',
          error: '#e11d48',
        },
      },
      {
        'dark-meet': {
          primary: '#0f4c75',
          secondary: '#3282b8',
          accent: '#bbe1fa',
          neutral: '#1b262c',
          'base-100': '#fff6ec',
          info: '#0f4c75',
          success: '#166534',
          warning: '#ca8a04',
          error: '#9f1239',
        },
      },
    ],
  },
};
