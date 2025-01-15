import react from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import jest from 'eslint-plugin-jest';
import globals from 'globals';
import parser from '@typescript-eslint/parser'; // Adicionando o parser para TypeScript

/** @type {import('eslint').Linter.Config} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser, // Definindo o parser para TypeScript
      globals: globals.browser, // Permite variáveis globais específicas do ambiente de navegador
    },
    plugins: {
      react, // Plugin para o React
      '@typescript-eslint': typescriptEslint, // Plugin para TypeScript
      'jsx-a11y': jsxA11y, // Plugin para acessibilidade em JSX
      jest, // Plugin para o Jest (para testes)
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/ban-ts-comment': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/alt-text': 'warn',
      'jest/valid-expect': 'warn',
      'jest/expect-expect': 'warn',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];
