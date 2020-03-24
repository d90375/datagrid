module.exports = {
  extends: [
    'react-app',
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['node_modules', 'src'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['jsx-a11y', 'prettier', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-param-reassign': 0,
    'no-loop-func': 1,
    'react/jsx-curly-newline': 'off', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
    'no-underscore-dangle': [0],
    'react/jsx-wrap-multilines': [0],
    'react/jsx-props-no-spreading': [0],
    'no-console': [2],
  },

  overrides: [
    // Override some TypeScript rules just for .js files
  ],
};
