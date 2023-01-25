const react = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['react', 'jsx-a11y'],
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-uses-react': 'off', // we're using React 17+ so it's irrelevant
    'react/react-in-jsx-scope': 'off', // we're using React 17+ so it's irrelevant
  },
};

module.exports = react;
