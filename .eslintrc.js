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
        'global-require': 1,
        "jsx-a11y/label-has-associated-control": [ 2, {
            "labelComponents": ["CustomInputLabel"],
            "labelAttributes": ["label"],
            "controlComponents": ["CustomInput"],
            "depth": 3,
          }],
    }
}