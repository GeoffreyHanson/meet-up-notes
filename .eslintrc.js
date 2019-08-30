module.exports = {
    extends: 'airbnb',
    parser: "babel-eslint",
    env: {
        es6: true,
        browser: true,
    },
    rules: {
        'react/jsx-filename-extension': 0,
        'indent': ['error', 2],
        'global-require': 1
    }
}