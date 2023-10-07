module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'react'
  ],
  'rules': {
    'react/jsx-max-props-per-line': [
      'error',
      {
        'maximum': 1,
        'when': 'multiline',
      },
    ],
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline',
    ],
    '@typescript-eslint/quotes': ['error', 'single'],
    'import/no-duplicates': 'off',
    'import/no-named-as-default': 'off',
    'react/no-danger': 'off',
  },
}
