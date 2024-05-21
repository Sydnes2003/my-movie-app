module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'node', 'react'],
  rules: {
    // error
    'semi': ['error', 'always'],
    'indent': ['error', 4],
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    'comma-dangle': ['error', 'always-multiline'],
    'no-multi-spaces': ['error'],
    // warn
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/jsx-curly-brace-presence': ['warn'],
    // off
    'no-underscore-dangle': 'off',
  },
}
