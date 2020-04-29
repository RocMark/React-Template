module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  'parser': 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'standard', 
    'standard-react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // 規定檔案需要將 JSX & JS 分開寫
    'react/jsx-filename-extension': [ 1, { extensions: ['.js', '.jsx'], }, ],
  },
};
