<template>
	<div id="nav">
		<router-link :to="{ name: 'Home', params: { id: 'welcome' } }">Welcome</router-link>
		<router-link :to="{ name: 'Home', params: { id: 'about' } }">About</router-link>

		<router-link to="/temp">Temp</router-link>
	</div>
	<router-view />
</template>

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
