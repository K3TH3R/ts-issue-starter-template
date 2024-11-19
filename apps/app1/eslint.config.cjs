const vue = require('eslint-plugin-vue');

module.exports = (async () => {
	const { $schema } = require('./project.json')
	const relativeRootPath = $schema.substring(0, $schema.indexOf('node_modules'))
	const baseConfig = await require(`${relativeRootPath}eslint.config.cjs`)

	baseConfig.push(...vue.configs['flat/recommended'])

	baseConfig.push({
		files: ['**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: require('@typescript-eslint/parser'),
			},
		},
	})
	baseConfig.push({
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.vue'],
		rules: {
			'vue/multi-word-component-names': 'off',
		},
	})

	return baseConfig
})()
