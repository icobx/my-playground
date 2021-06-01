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
	<router-view @navigate-after-scroll="onNavigateAfterScroll" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from './router'

export default defineComponent({
	methods: {
		onNavigateAfterScroll: (section: string) => {
			console.log(section)
			router.push({ name: 'Home', params: { id: section } })
		},
	},
	beforeRouteUpdate(to, from, next) {
		this.name = to.params.name

		next()
	},
})
</script>

<style lang="scss">
#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
