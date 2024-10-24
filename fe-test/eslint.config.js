import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] }, // Ignoring the 'dist' folder
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended], // Using JS and TypeScript ESLint recommended settings
    files: ['**/*.{ts,tsx}'], // Apply to TypeScript files
    languageOptions: {
      ecmaVersion: 2020, // Set ECMAScript version
      globals: globals.browser, // Include browser global variables
    },
    plugins: {
      'react-hooks': reactHooks, // React hooks plugin
      'react-refresh': reactRefresh, // React Refresh plugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // Include React hooks rules
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ], // React refresh rule for components
      "@typescript-eslint/no-explicit-any": "off", // Disabling no-explicit-any globally
    },
  },
);
