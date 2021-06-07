<template>
	<section id="welcome" class="background">
		<div class="content-wrapper">
			<!-- toto sa bude menit do inych jazykov a potom ze uz ine jazyky neviem... zas welcome  -->
			<div class="content">
				<h1 class="content-title">Welcome</h1>
				<p class="content-subtitle">
					My name is Jakub and on the following pages you will get to know me a little better.
					<!-- <img :src="require('@/assets/images/J_animated.svg')" alt="animated J svg" /> -->
				</p>
			</div>
		</div>
		<div class="geom-wrapper geom-wrapper--welcome">
			<div class="geom-welcome"></div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		geomObjects: {
			required: true,
			type: Number,
		},
	},
	setup() {
		return {}
	},
})
</script>

<style scoped></style>
