module.exports = {
    env: {browser: true, es2021: true},
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:react/jsx-runtime', //'plugin:prettier/recommended'
],
    parserOptions: {ecmaFeatures: {jsx: true}, ecmaVersion: 12, sourceType: 'module'},
    settings: {react: {version: 'detect'}},
    plugins: ['react-refresh'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react-refresh/only-export-component': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'off',
        'react/prop-types': 'off',
        'no-undef': 'off',
    },
};