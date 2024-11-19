const antfu = require('@antfu/eslint-config').default
const { GLOB_CSS, GLOB_POSTCSS } = require('@antfu/eslint-config')

module.exports = antfu(
	{
		stylistic: {
			'indent': 'tab',
			'max-len': [2, 80, 2],
		},
		ignores: [
			'**/*.svg',
			'**/*.snap',
			'**/*.mdx',
			'**/Turf.js',
			'**/*.js',
			'**/*.typegen.ts',
			'**/.auth/',
			'**/db/src/lib/test',
			'**/public',
			'**/playwright-report',
			'**/*.rxdb.ts',
			'./artifact',
			'./coverage',
			'./dist',
			'./node_modules',
		],
		formatters: {
			/**
			 * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
			 * By default uses Prettier
			 */
			css: true,
			/**
			 * Format HTML files
			 * By default uses Prettier
			 */
			html: true,
			/**
			 * Format Markdown files
			 * Supports Prettier and dprint
			 * By default uses Prettier
			 */
			markdown: 'prettier',
		},
	},
	{
		rules: {
			'no-console': 'off',
			'antfu/if-newline': 'off',
			'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
			'curly': [2, 'multi-line', 'consistent'],
			'accessor-pairs': 'off',
		},
	},
	{
		files: ['**/*'],
		rules: {
			'import/order': ['off'],
			'antfu/no-top-level-await': 'off',
			'ts/no-unused-expressions': 'off', // @TODO: fix the relevant code points
			'perfectionist/sort-imports': [
				'error',
				{
					type: 'natural',
					order: 'asc',
					groups: [
						[
							'type',
							'primevue-type',
							'internal-type',
							'parent-type',
							'sibling-type',
							'index-type',
						],
						['builtin', 'external'],
						'primevue',
						['internal', 'parent', 'sibling', 'index'],
						'side-effect',
						'style',
						'object',
						'unknown',
					],
					customGroups: {
						value: {
							primevue: ['primevue/**'],
						},
						type: {
							'primevue-type': ['primevue/**'],
						},
					},
					newlinesBetween: 'always',
				},
			],
		},
	},
	{
		files: ['**/*.ts'],
		rules: {
			'ts/consistent-type-definitions': ['error', 'type'],
		},
	},
	{
		files: ['**/*.vue'],
		rules: {
			'no-unused-vars': 'off',
			'unused-imports/no-unused-vars': 'off',
			'ts/no-unused-vars': 'off',
			'vue/no-template-shadow': 'off', // primevue components have a lot of shadowed variables
		},
	},
	{
		files: [GLOB_CSS, GLOB_POSTCSS],
		rules: {
			'format/prettier': [
				'error',
				{
					useTabs: true,
					parser: 'css',
				},
			],
		},
	},
)
