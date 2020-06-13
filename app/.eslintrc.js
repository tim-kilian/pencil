module.exports = {
    "env": {
        "commonjs": true,
        "es2020": true,
        "node": true
    },
    "extends": [
        "google"
    ],
    "parserOptions": {
        "ecmaVersion": 11
    },
    "rules": {
        "linebreak-style": "off",
        "require-jsdoc": "off",
        "valid-jsdoc": "off",
        "indent": ["error", 4],
        "comma-dangle": ["error", "never"],
        "quotes": ["error", "double"],
        "max-len": "off",
        "no-extra-semi": ["error"],

        "no-var": "off",
        "no-throw-literal": "off",
        "guard-for-in": "off",
        "no-unused-vars": "off",
        "no-caller": "off",
        "new-cap": "off",
        "no-tabs": "off",
        "no-mixed-spaces-and-tabs": "off",
        "prefer-rest-params": "off",
        "camelcase": "off",

        "no-invalid-this": "off"

    }
};
