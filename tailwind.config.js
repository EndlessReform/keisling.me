module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      fg: '#231f20',
      bg: '#fcfcf6',
      shadow: '#faf0f5',
      grey: '#75787d',
      green: '#377765',
      orange: '#f49b7f',
      blue: '#1d64cc'
    },
    fontFamily: {
      sans: ['Basier Circle', 'system-ui'],
      mono: ['Basier Circle Mono', 'ui-monospace']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
