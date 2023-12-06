/*
 * @Description: eslint 配置文件
 * @Author: Rfan
 * @Date: 2022-03-25 15:21:30
 * @LastEditTime: 2022-08-04 09:23:28
 */

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['prettier'],
  extends: ['react-app', 'react-app/jest', 'standard', 'plugin:prettier/recommended'],

  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 0,
    semi: ['error', 'always'],
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],
    'no-prototype-builtins': 'error',
    'prefer-object-spread': 'error',
    'prefer-rest-params': 'error',
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    'dot-notation': ['error', { allowKeywords: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-case-declarations': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'computed-property-spacing': ['error', 'never'],
    radix: 'error',
    'id-length': [
      2,
      {
        min: 2,
        properties: 'never',
        exceptions: ['t', '_', 'i', 'j', 'k', 'v']
      }
    ],

    'no-unused-vars': 1, // 开发暂时屏蔽
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error']
  }
};
