module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'standard',
  ],
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-var': ['error'],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'require-await': ['error'],
    'max-len': ['error', { code: 120 }],
    // 'max-lines': ['error', 200],
    // 'max-lines-per-function': ['error', 20],
    // complexity: ['error', 6],
    'max-nested-callbacks': ['error', 2],
    'max-depth': ['error', 3],
    'max-params': ['error', 3],
  },
  env: {
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: [
        '*.ts',
        '*.tsx',
      ],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
    },
    {
      files: [
        '*.test.js',
        '*.test.ts',
        '*.test.jsx',
        '*.test.tsx',
      ],
      extends: [
        'plugin:mocha/recommended',
      ],
      rules: {
        'mocha/no-mocha-arrows': 'off',
        'mocha/no-hooks-for-single-case': 'off',
        'max-nested-callbacks': 'off',
      },
      env: {
        mocha: true,
      },
    },
  ],
};
