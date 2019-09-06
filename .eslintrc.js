const { resolve } = require('path');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'import'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'camelcase': 1,
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': [2, {
      before: false,
      after: true
    }],
    'complexity': [0, 5],
    'consistent-return': 2,
    'default-case': 2,
    'eol-last': 2,
    'eqeqeq': 2,
    'indent': [2, 2, {
      SwitchCase: 1
    }],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum'
    }],
    'linebreak-style': [2, 'unix'],
    'new-parens': 2,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-console': 2,
    'no-debugger': 2,
    'no-dupe-class-members': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-floating-decimal': 2,
    'no-irregular-whitespace': 2,
    'no-magic-numbers': 0,
    'no-multi-spaces': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-var': 2,
    'object-curly-spacing': [2, 'always'],
    'prefer-const': 2,
    'quotes': [2, 'single', {
      allowTemplateLiterals: true
    }],
    'semi': [2, 'always'],
    'semi-spacing': [2, { before: false, after: true }],
    'space-infix-ops': [2, {
      int32Hint: false
    }],
    'space-in-parens': [2, 'never'],
    'yoda': 2,
  },
  overrides: [
    {
      files: ['./gatsby-*.js'],
      parserOptions: {
        sourceType: 'module'
      },
    },
    {
      files: ['./src/**/*.ts', './src/**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: resolve(__dirname, './tsconfig.json')
      },
      extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      settings: {
        react: {
          version: 'detect'
        }
      },
      rules: {
        'react/no-unescaped-entities': 0,
        'react/prop-types': 0,
        'import/no-relative-parent-imports': 2,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/indent': [2, 2, { SwitchCase: 1 }],
        '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],
      }
    }
  ],
};
