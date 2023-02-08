/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        "Inter var, sans-serif",
        { fontFeatureSettings: '"cv10", "cv09", "cv08", "cv06", "cv05", "cv11", "ss01", "ss03"' }
      ],
      'mono': ['ui-monospace, SFMono-Regular, monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New"'],
    },
    plugins: [
    ],
  },
  plugins: [require('@tailwindcss/forms')],
}
