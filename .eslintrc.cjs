/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'jsx-a11y'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			},
			rules: {
				'svelte/valid-compile': 'off',
				'svelte/no-at-html-tags': 'warn',
				'jsx-a11y/no-noninteractive-tabindex': 'warn',
				'jsx-a11y/no-noninteractive-element-interactions': 'warn',
				'css-unused-selector': 'off'
			}
		}
	],
	rules: {
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: {
					Function: false
				},
				extendDefaults: true
			}
		],
		'@typescript-eslint/no-explicit-any': 'off'
	}
};
