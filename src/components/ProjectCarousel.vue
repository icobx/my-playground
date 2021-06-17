<template>
	<div class="carousel-wrapper">
		<button id="previous" class="carousel-btn" @click="swipe(true)">&lt;</button>
		<div class="carousel-cards">
			<!-- <transition-group name="fade">
			</transition-group> -->
			<project-card v-for="project in activeProjects" :key="project.name" :project="project" />
		</div>
		<button id="next" class="carousel-btn" @click="swipe(false)">&gt;</button>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

// import Slick from 'vue-slick'
import ProjectCard from './ProjectCard.vue'
import ProjectData from '@/types/ProjectData'
import 'slick-carousel/slick/slick.css'

export default defineComponent({
	name: 'ProjectCarousel',
	components: {
		ProjectCard,
	},
	setup() {
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

		const activeProjects = computed(() => {
			return projects.value.filter((project) => project.active)
		})

		const swipe = (prev: boolean) => {
			let n = projects.value.length

			for (let i = 0; i < n; i++) {
				if (projects.value[i].active) {
					projects.value[i].active = false
					// console.log(prev ? (i - 1 + n) % n : (i + 1) % n)
					projects.value[prev ? (i - 1 + n) % n : (i + 1) % n].active = true
					break
				}
			}
		}

		return { projects, activeProjects, swipe }
	},
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.carousel-wrapper {
	display: flex;
	justify-content: space-between;
}
</style>
