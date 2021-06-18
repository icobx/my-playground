<template>
	<div>
		<h1>AI abo co</h1>
		<div class="wrapper">
			<div class="items" id="x">X</div>
			<div class="items" id="y">Y</div>
			<div class="items" id="z">Z</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		return {}
	},
})
</script>

<style lang="scss" scoped>
.wrapper {
	margin: 20vh auto;
	position: relative;
	border: 2px solid green;
	height: 20vh;
	width: 30vw;
	overflow: hidden;
}

.items {
	height: 100%;
	width: 100%;
	border: 1px solid red;
	display: inline-block;
	position: absolute;
}

#x {
	left: -30vw;
}

#z {
	left: 30vw;
}
</style>
