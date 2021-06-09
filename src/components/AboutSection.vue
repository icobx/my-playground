<template>
	<section id="about" class="background">
		<div class="content-wrapper">
			<p class="content-title">About me</p>
			*dajaka fotka by sa zisla*
			<p class="content-subtitle">
				I am currently in the fourth year of my studies of Applied Informatics at
				<a href="https://www.fei.stuba.sk/">Faculty of Electrical Engineering and Information STU in Bratislava</a> and
				I am looking for opportunities to gain experience in the software development. While being employed in the IT
				field before, most of my current programming experience comes from school projects,
				<small>some of which you will see below</small>, and that is something I would like to change.
			</p>
		</div>
		<div class="geom-wrapper geom-wrapper--triangle">
			<div class="geom-triangle">
				<div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	</section>
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
.content-subtitle {
	width: 50%;
	margin: 0 auto;
}
</style>
