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
        // Reduce error count
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "no-var": "off",
        "space-before-function-paren": ["error", "always"],
        "max-len": "off",
        "comma-dangle": ["error", "never"],
        "no-tabs": "off",

        // google
        "linebreak-style": "error",
        "semi": ["error", "always"],
        "spaced-comment": ["error", "always"],
        "no-trailing-spaces": "error",
        "brace-style": ["error", "1tbs"],
        "no-extra-semi": ["error"],

        // After --fix
        "require-jsdoc": "off",
        "no-unused-vars": "off",
        "guard-for-in": "off",
        "no-mixed-spaces-and-tabs": "off",
        "new-cap": "off",
        "valid-jsdoc": "off",
        "no-caller": "off",
        "no-throw-literal": "off",
        "camelcase": "off",
        "prefer-rest-params": "off",
        "no-with": "off"

        // "no-invalid-this": "off"
    }
};
