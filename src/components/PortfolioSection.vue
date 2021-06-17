<template>
	<section id="portfolio" class="background">
		<div class="content-wrapper temp">
			<p class="content-title">Projects</p>
			<div class="projects-carousel">
				<project-carousel></project-carousel>
			</div>
		</div>
		<div class="geom-wrapper geom-wrapper--circle">
			<div class="geom-circle"></div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ProjectCarousel from './ProjectCarousel.vue'

export default defineComponent({
	name: 'Portfolio',
	components: {
		ProjectCarousel,
	},
	setup() {
		return {}
	},
})
</script>

<style scoped></style>
