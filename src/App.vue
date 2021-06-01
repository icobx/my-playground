<template>
	<div id="nav">
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

<style lang="scss">
#nav {
	// temp
	z-index: 4000;

	border-right: 2px solid white;
	width: 120px;
	height: 100vh;
	padding: 30px;

	position: fixed;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: right;

	ul {
		list-style-type: none;
	}

	a {
		font-weight: bold;
		color: rosybrown;
		text-decoration: none;
		font-family: 'Open Sans', sans-serif;

		// font-size: 2.5vh;
		// line-height: 1.4;
		// text-transform: uppercase;

		&.router-link-exact-active {
			color: red;
		}
	}
}
</style>
