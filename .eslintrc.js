module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/jsx-no-undef': 'off',
    'no-trailing-spaces': 'off',
    'no-unused-vars': 'warn',
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
