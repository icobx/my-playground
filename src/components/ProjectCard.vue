<template>
	<div>
		<div class="project">
			<div class="project-info">
				<h2>{{ project.name }}</h2>
				<p>
					{{ project.content }}
				</p>
			</div>
			<div class="project-img">
				<img :src="require('@/assets/images/' + project.image)" alt="prject img" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import ProjectData from '@/types/ProjectData'

export default defineComponent({
	name: 'ProjectCard',
	props: {
		project: {
			required: true,
			type: Object as PropType<ProjectData>,
		},
	},
})
</script>

<style lang="scss" scoped>
.project {
	// margin: 8em 0;
	border: 1px solid greenyellow;
	// width: 50vw;

	display: flex;
	// align-items: ;
	justify-content: space-between;

	&-info {
		width: 49%;
		height: inherit;
		// border: 1px solid red;

		h2 {
			padding: 2em;
			text-transform: lowercase;
		}

		p {
			padding: 2em;
			line-height: 1.8em;
			text-align: left;
			// overflow: scroll;
		}
	}

	&-img {
		width: 49%;
		border: 2px solid lighten(#4b4a54, 20%);
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 98%;
			height: 98%;
		}
	}
}
</style>
