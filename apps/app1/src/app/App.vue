<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'

const query = ref('')

function handleSearchQueryUpdate(value: string) {
	query.value = value
}
</script>

<template>
	<header>
		<nav>
			<RouterLink to="/">
				Home
			</RouterLink>
			<RouterLink to="/about">
				About
			</RouterLink>
		</nav>
	</header>
	<div>
		<InputGroup>
			<InputGroupAddon>
				<span class="pi pi-search" />
			</InputGroupAddon>
			<InputText
				v-model="query"
				size="small"
				@update:model-value="handleSearchQueryUpdate"
			/>
		</InputGroup>

		<Button
			severity="secondary"
			size="small"
			variant="outlined"
		>
			Button Text
		</Button>
	</div>
	<RouterView />
</template>

<style scoped lang="css">
header {
	line-height: 1.5;
	max-width: 100vw;
}

nav > a {
	padding-left: 1rem;
	padding-right: 1rem;
}

@media (min-width: 768px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
		margin-left: auto;
		margin-right: auto;
		max-width: 768px;
	}

	nav {
		text-align: left;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
