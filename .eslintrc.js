module.exports = {
    extends: ['wesbos', 'plugin:sonarjs/recommended'],

    plugins: ['sonarjs'],

    rules: {
        'react/prop-types': 0,
        'import/no-named-as-default': 0,
        'import/no-extraneous-dependencies': 0,
        'no-console': 1,
        'react/jsx-props-no-spreading': 'off',
        'import/no-unresolved': [2, { caseSensitive: false }],
        'prettier/prettier': [
            2,

            {
                trailingComma: 'es5',

                singleQuote: true,

                printWidth: 150,

                tabWidth: 4,

                jsxBracketSameLine: true,

                endOfLine: 'auto',
            },
        ],
    },
};
