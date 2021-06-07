<template>
	<div id="nav" class="nav">
		<ul>
			<li>
				<router-link :to="{ name: 'Home', params: { id: 'welcome' } }">Welcome</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'Home', params: { id: 'about' } }">About</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'Home', params: { id: 'skills' } }">Skills</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'Home', params: { id: 'portfolio' } }">Portfolio</router-link>
			</li>
			<li>
				<router-link to="/temp">Temp</router-link>
			</li>
		</ul>
	</div>
	<router-view @on-navigate-after-scroll="navigateAfterScroll" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from './router'

import SectionId from './types/SectionId'

export default defineComponent({
	methods: {
		navigateAfterScroll: (section: SectionId) => {
			router.push({ name: 'Home', params: { id: section } })
		},
	},
})
</script>
