<template>
	<div class="carousel-wrapper">
		<a id="previous" class="carousel-btn" @click="swipe(true)"
			><font-awesome-icon icon="chevron-left" class="carousel-btn-icon"
		/></a>
		<transition-group tag="div" class="carousel-cards" :name="transitionName" mode="out-in">
			<project-card
				v-for="project in projects"
				:key="project.name"
				:project="project"
				v-show="project.active"
				class="carousel-card"
			/>
		</transition-group>
		<a id="next" class="carousel-btn" @click="swipe(false)"
			><font-awesome-icon icon="chevron-right" class="carousel-btn-icon"
		/></a>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import ProjectCard from './ProjectCard.vue'
import ProjectData from '@/types/ProjectData'

export default defineComponent({
	name: 'ProjectCarousel',
	components: {
		FontAwesomeIcon,
		ProjectCard,
	},
	setup() {
		library.add(faChevronRight, faChevronLeft)
		const projects = ref<ProjectData[]>([
			{
				name: 'project 1',
				content:
					'1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos natus eaque optio perspiciatis quasi illo hic aspernatur iure, ducimus consectetur doloribus nostrum non quisquam voluptatum necessitatibus minima aut modi porro nesciunt quibusdam perferendis vel voluptates consequatur. Magni, quis! Ullam nam, similique deserunt dolor ex repudiandae, optio earum rerum atque laudantium exercitationem officiis quae tempora nihil. Incidunt maiores accusamus totam inventore debitis nulla asperiores quisquam, impedit in adipisci? Veniam, voluptas optio? Distinctio, eos libero, porro reprehenderit sit recusandae deserunt sunt error nam, praesentium nihil quasi reiciendis. A quaerat labore eligendi natus! Dolores deleniti facere ut, magni dolorum quibusdam commodi atque!',
				image: 'webte1.png',
				active: false,
			},
			{
				name: 'project 2',
				content:
					'2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos natus eaque optio perspiciatis quasi illo hic aspernatur iure, ducimus consectetur doloribus nostrum non quisquam voluptatum necessitatibus minima aut modi porro nesciunt quibusdam perferendis vel voluptates consequatur. Magni, quis! Ullam nam, similique deserunt dolor ex repudiandae, optio earum rerum atque laudantium exercitationem officiis quae tempora nihil. Incidunt maiores accusamus totam inventore debitis nulla asperiores quisquam, impedit in adipisci? Veniam, voluptas optio? Distinctio, eos libero, porro reprehenderit sit recusandae deserunt sunt error nam, praesentium nihil quasi reiciendis. A quaerat labore eligendi natus! Dolores deleniti facere ut, magni dolorum quibusdam commodi atque!',
				image: 'tp.png',
				active: false,
			},
			{
				name: 'project 3',
				content:
					'3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos natus eaque optio perspiciatis quasi illo hic aspernatur iure, ducimus consectetur doloribus nostrum non quisquam voluptatum necessitatibus minima aut modi porro nesciunt quibusdam perferendis vel voluptates consequatur. Magni, quis! Ullam nam, similique deserunt dolor ex repudiandae, optio earum rerum atque laudantium exercitationem officiis quae tempora nihil. Incidunt maiores accusamus totam inventore debitis nulla asperiores quisquam, impedit in adipisci? Veniam, voluptas optio? Distinctio, eos libero, porro reprehenderit sit recusandae deserunt sunt error nam, praesentium nihil quasi reiciendis. A quaerat labore eligendi natus! Dolores deleniti facere ut, magni dolorum quibusdam commodi atque!',
				image: 'library.png',
				active: true,
			},
		])

		const transitionName = ref('slide-next')

		const activeProjects = computed(() => {
			return projects.value.filter((project) => project.active)
		})

		const swipe = (prev: boolean) => {
			let n = projects.value.length

			if (prev) transitionName.value = 'slide-prev'
			else transitionName.value = 'slide-next'

			for (let i = 0; i < n; i++) {
				if (projects.value[i].active) {
					projects.value[i].active = false
					// console.log(prev ? (i - 1 + n) % n : (i + 1) % n)
					projects.value[prev ? (i - 1 + n) % n : (i + 1) % n].active = true
					break
				}
			}
		}

		return { projects, activeProjects, swipe, transitionName }
	},
})
</script>

<style lang="scss" scoped>
.carousel {
	&-wrapper {
		margin: 8em 0;
		// border: 1px solid red;
		max-height: 50vh;
		display: flex;
		justify-content: space-between;
	}

	&-cards {
		height: 43.5vh;
		width: 50vw;
		position: relative;
		// overflow: hidden;
	}

	&-card {
		height: 100%;
		width: 100%;
		display: inline-block;
		position: absolute;
		left: 0;
	}

	&-btn {
		text-transform: uppercase;
		background-color: transparent;
		color: white;
		padding: 0 2em;
		border: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		&-icon {
			// border: 1px solid white;
			width: 1em;
			height: 1em;
		}
		&:hover {
			background-color: rgba($color: #000000, $alpha: 0.3);
			// border: 1px solid white;
			// border-width: 1px 0 1px 1px;
		}
		// &:first-child {

		// }

		// &:last-child {
		// 	&:hover {
		// 		// border: 1px solid white;
		// 		// border-width: 1px 1px 1px 0;
		// 	}
		// }
	}
}

.slide {
	&-prev,
	&-next {
		&-enter-to,
		&-leave-from {
			opacity: 1;
			left: 0;
		}

		&-enter-active {
			transition: all 0.5s ease-in-out 0.5s;
		}
		&-leave-active {
			transition: all 0.5s ease-in-out;
		}
	}

	&-prev {
		&-enter-from {
			opacity: 0;
			left: 150px;
		}
		&-leave-to {
			opacity: 0;
			left: -150px;
		}
	}

	&-next {
		&-enter-from {
			opacity: 0;
			left: -150px;
		}
		&-leave-to {
			opacity: 0;
			left: 150px;
		}
	}
}
.hidden {
	display: none;
}
</style>
