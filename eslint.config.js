import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'
import tailwindcss from 'eslint-plugin-tailwindcss'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  pluginReact.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  ...tailwindcss.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
    },
    settings: {
      react: { version: 'detect' },
    },
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    plugins: {
      'react-refresh': reactRefresh,
      import: importPlugin,
      prettier,
    },
    rules: {
      'no-console': ['warn', { allow: ['error', 'warn', 'debug'] }],
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
          pathGroups: [{ pattern: '@/**', group: 'internal', position: 'after' }],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
)
