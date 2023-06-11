module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'react', 'axios'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "react/jsx-uses-react": "error",
    "axios/jsx-uses-axios": "error",     
    "react/jsx-uses-vars": "error" 
  },
}
