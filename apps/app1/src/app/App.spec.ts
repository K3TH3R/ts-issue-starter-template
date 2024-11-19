import { cleanup, render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import PrimeVue from 'primevue/config'

import router from '../router'
import App from './App.vue'

describe('app', () => {
	afterEach(async () => {
		cleanup()
	})

	// it('renders properly #2', async () => {
	// 	const { container, getByTestId } = render(App, {
	// 		global: {
	// 			plugins: [router, PrimeVue],
	// 		},
	// 	})
	// 	await router.isReady()

	// 	const welcome = getByTestId('welcome')
	// 	expect(welcome).toHaveTextContent('Welcome app1 👋')
	// 	expect(container).toMatchSnapshot()
	// })

	it('renders properly', async () => {
		const { container, getByTestId } = render(App, {
			global: {
				plugins: [router, PrimeVue],
			},
		})
		await router.isReady()

		const welcome = getByTestId('welcome')
		expect(welcome).toHaveTextContent('Welcome app1 👋')
		expect(container).toMatchSnapshot()
	})

	it('renders properly #3', async () => {
		const { container, getByTestId } = render(App, {
			global: {
				plugins: [router, PrimeVue],
			},
		})
		await router.isReady()

		const welcome = getByTestId('welcome')
		expect(welcome).toHaveTextContent('Welcome app1 👋')
		expect(container).toMatchSnapshot()
	})
})
