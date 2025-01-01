const typescriptParser = require('@typescript-eslint/parser')
const simpleImportSort = require('eslint-plugin-simple-import-sort')
const react = require('eslint-plugin-react')
const reactNative = require('eslint-plugin-react-native')
const prettier = require('eslint-plugin-prettier')

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      react,           
      'react-native': reactNative,
      'simple-import-sort': simpleImportSort,
      prettier,        
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-indent': ['error', 2],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'jsx-quotes': ['error', 'prefer-double'],
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 80,
          tabWidth: 2,
        },
      ],
    },
    ignores: [
      '.next/',
      'out/',
      'dist/',
      'build/',
      'node_modules/',
      '.cache/',
      'coverage/',
      '*.tsbuildinfo',
    ],
  },
];