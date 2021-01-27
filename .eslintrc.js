module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // Regra para ignorar o erro de spreading 
    'react/jsx-props-no-spreading': ['enabled', {
      'html': 'ignore' | 'enforce',
      'custom': 'ignore' | 'enforce',
      'explicitSpread': 'ignore' | 'enforce',
      'exceptions': []
    }]
  },
};
