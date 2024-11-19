import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import router from '../router'
import App from './App.vue'

describe('app', () => {
	it('renders properly', async () => {
		const wrapper = mount(App, { global: { plugins: [router] } })
		await router.isReady()
		expect(wrapper.text()).toContain('Welcome app1 👋')
	})
})
