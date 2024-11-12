import js from '@eslint/js'
import globals from 'globals'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import pluginReact from 'eslint-plugin-react'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default tseslint.config(pluginReact.configs.flat.recommended, {
  files: ['**/*.{ts,tsx,js,jsx}'],
  ignores: ['dist', 'node_modules'],
  languageOptions: {
    ecmaVersion: 'latest',
    globals: globals.browser,
  },
  settings: {
    react: { version: 'detect' },
  },
  extends: [js.configs.recommended, ...tseslint.configs.recommended, ...tailwindcss.configs['flat/recommended']],
  plugins: {
    'react-refresh': reactRefresh,
    'jsx-a11y': jsxA11y,
    import: importPlugin,
    prettier,
  },
  rules: {
    'no-console': ['warn', { allow: ['error', 'warn', 'debug'] }],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': ['warn', { elements: ['img'], img: ['Image'] }],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
      },
    ],
    'brace-style': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 2 }],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
})
