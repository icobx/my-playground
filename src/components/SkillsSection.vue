<template>
	<section id="skills" class="background">
		<div class="content-wrapper">
			<p class="content-title">Skills</p>
			<p class="content-subtitle"></p>
			<skill-item />
			<!-- <ul>
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>Python</li>
				<li>PHP</li>
				<li>Java</li>
			</ul> -->
		</div>
		<div class="geom-wrapper geom-wrapper--line">
			<div class="geom-line"></div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SkillItem from './SkillItem.vue'
export default defineComponent({
	components: {
		SkillItem,
	},
	setup() {
		return {}
	},
})
</script>

<style lang="scss" scoped></style>
