module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb'
  ],
  'settings': {
    'import/resolver': {
      typescript: {},
    },
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
      'ecmaFeatures': {
        'jsx': true
      },
      'ecmaVersion': 'es2021',
      'sourceType': 'module',
      'project': [ './tsconfig.json' ]
  },
  'plugins': [
    'jsx-a11y',
    'react',
    '@typescript-eslint',
  ],
  'ignorePatterns': [
    '**/__tests__/*',
    '**/*.config.*s',
    '*.d.*s',
    '.eslintrc.js'
  ],
  'rules': {
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'capitalized-comments': 0,
    'consistent-return': 0,
    'complexity': [
      'error',
      15
    ],
    'default-case-last': 2,
    'func-style': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'keyword-spacing': [
      'error', {
        'overrides': {
          'for': {
            'after': false
          },
          'if': {
            'before': true,
            'after': false
          },
          'switch': {
            'after': false
          },
          'while': {
            'after': false
          },
        }
      }
    ],
    'max-len': 0,
    'max-lines-per-function': [
      'error', {
        'max': 100,
        'skipBlankLines': true,
        'skipComments': true
      }
    ],
    'multiline-comment-style': 0,
    'no-console': 0,
    'no-duplicate-imports': [
      'error', {
        'includeExports': true
      }
    ],
    'no-underscore-dangle': 0,
    'no-useless-return': 'off',
    'no-restricted-syntax': [
      'error',
      'TSEnumDeclaration'
    ],
    'object-curly-spacing': 0,
    'object-shorthand': [ 'error', 'consistent' ],
    'one-var': [ 'error', 'never' ],
    'prefer-arrow-callback': 'off',
    'react/function-component-definition': [
      2, {
        'namedComponents': 'arrow-function'
      }
    ],
    'react/jsx-no-constructed-context-values': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-filename-extension': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-no-literals': 0,
    'react/jsx-max-depth': 0,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 0,
    'require-jsdoc': 0,
    'require-unicode-regexp': 0,
    'sort-keys': 0,
    'sort-imports': 0,
    '@typescript-eslint/no-var-requires': 0,
  },
  // 特定のファイルのみルール除外設定を記載
  'overrides': [
    {
      'files': ['./src/context/TransactionContext.tsx'],
      'rules': {
        'no-shadow': [ 0, { 'hoist': 'never' } ],
        '@typescript-eslint/no-unused-vars': 0,
      }
    }
  ]
}
