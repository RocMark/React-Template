module.exports = {
  // 可使用哪些語法
  env: {
    browser: true,
    es6: true,
    node: true,
    jquery: true,
    jest: true,
  },
  'parser': 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'standard', 
    'standard-react'
  ],
  // 全域變數，設置為 false 表示他不允許重新賦值
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // 2020
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    /* React Best Practice */
    // 禁止 inline function 於 JSX 中 (可避免無意義的重新建立 Function & 造成渲染)
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: true,
      },
    ],
    'react/no-did-update-set-state': 'error', // 避免造成重複渲染
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',

    /* Coding Style 相關 */
    semi: ['error', 'never'], // 結尾分號
    'linebreak-style': 0, // 作業系統 LF & CRLF 差異
    'jsx-quotes': ['warn', 'prefer-single'], 
    'array-bracket-spacing': 'warn',
    'no-trailing-spaces': 'warn',
    'import/order': 'warn',
    'eol-last': 'warn',
    quotes: 'warn',
    'comma-dangle': 'warn',
    'operator-linebreak': 'warn',
    'arrow-body-style': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'object-curly-newline': 'off',
    'max-len': 'off',

    /* 其他 */
    // 規定檔案需要將 JSX & JS 分開寫
    'react/jsx-filename-extension': [ 1, { extensions: ['.js', '.jsx'], }, ],

    /* 開發期間方便用 (建議日後開啟檢查) */
    'no-unused-vars': 'off', // 允許保留未用到的變數
    'no-console': 'off', // 允許 console.log
    'import/prefer-default-export': 'off', // 若只有一個 export 於檔案 必須使用 default

    /* Custom Rules */
    camelcase: 'off', // 必須採用駝峰式命名
    'no-use-before-define': 'off', // 同檔案被使用的 Function 必須位於 使用者的上方
    // 為了可使用 <Test {...config} > 用來攤平傳入的 Props
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': ['error', { props: false }], // 不可重新賦予值，但可改變其內容
  },
};
