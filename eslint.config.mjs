import eslint from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import prettierPlugin from 'eslint-plugin-prettier/recommended'
import tsEslint from 'typescript-eslint'

const config = [
  // Base configurations
  eslint.configs.recommended,
  tsEslint.configs.recommended,
  prettierPlugin,

  // Next.js specific configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
      '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // JavaScript specific configuration
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // next-i18next.config.js specific configuration
  {
    files: ['next-i18next.config.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]

export default config
