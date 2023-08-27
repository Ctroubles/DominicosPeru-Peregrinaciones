module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    "plugins": [
        "react"
    ],
    "ignorePatterns": [".eslintrc.cjs", "vite.config.ts"],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "error"
    }
}
