module.exports = {
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  content: [
    './templates/**/*.twig',
  ],
  theme: {
    extend: {
      minHeight: {
        'screenh' : '100vh',
      },
      colors: {
        'umbra': '#1d1d1d',
        'wolf': '#292929',
        'vault': '#727272',
        'shaving': '#E2E5E7',
        'errigal': '#f2f2f2',
        'asparagus': '#75AE4C',
        'money': '#82C341',
        'grass': '#99C47C',
        'ficus': '#006B36',
        'storm': '#343F48',
        'fjord': '#495965',
        'mercury': '#E9ECEF',
        'azure': '#007BFF',
      },
    },
    fontFamily: {
      sans: ['adelle-sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
};
