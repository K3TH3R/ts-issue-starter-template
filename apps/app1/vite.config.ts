import type { InlineConfig } from 'vitest/node'

import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import VueRouter from 'unplugin-vue-router/vite'
/// <reference types='vitest' />
import type { UserConfig } from 'vite'

import { defineConfig, loadEnv } from 'vite'

export type ViteConfig = UserConfig & { test?: InlineConfig }

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, '../')
	const dts = resolve(__dirname, 'src/typed-router.d.ts')
	const routerConfig = {
		extensions: ['.page.vue', '.drawer.vue', '.modal.vue'],
		routesFolder: ['apps/app1/src/router/routes'],
		dts,
	}

	const config: ViteConfig = {
		root: __dirname,
		cacheDir: '../../node_modules/.vite/apps/app1',
		define: {
			__VUE_OPTIONS_API__: 'false',
			__VUE_PROD_DEVTOOLS__: 'false',
			__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
		},
		plugins: [
			nxViteTsPaths(),
			vue(),
			VueRouter(routerConfig),
			VueI18nPlugin({
				// This will deeply traverse for all `locales` folders and merge them into a final
				// translations dictionary, which makes it easier to manage individual translations
				// on a page-by-page basis.
				include: resolve(__dirname, 'src/**/locales/**'),
				compositionOnly: true,
				runtimeOnly: false,
				strictMessage: false,
			}),
		],

		worker: {
			plugins: [nxViteTsPaths()],
		},
		build: {
			outDir: '../../dist/apps/app1',
			emptyOutDir: true,
			reportCompressedSize: true,
			commonjsOptions: {
				transformMixedEsModules: true,
			},
		},
	}

	if (mode === 'test') {
		config.test = {
			watch: false,
			globals: true,
			mockReset: true,
			environment: 'happy-dom',
			passWithNoTests: true,
			include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
			reporters: ['default'],
			coverage: {
				provider: 'v8',
				reporter: ['json', 'html'],
				reportsDirectory: '../../coverage/apps/app1',
			},
			setupFiles: ['@vitest/web-worker'],
		}
	}

	if (mode === 'development') {
		config.server = {
			port: 9339,
			strictPort: true,
			fs: { allow: ['../../..'] },
		}
	}

	return config
})
