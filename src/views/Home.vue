<template>
	<div class="parallax">
		<welcome-section :geomObjects="geomObjects" />
		<about-section />
		<skills-section />
		<portfolio-section />
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, onUpdated } from 'vue'
import $ from 'jquery'
import _ from 'underscore'

import WelcomeSection from '../components/WelcomeSection.vue'
import AboutSection from '../components/AboutSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import SectionId from '@/types/SectionId'
// import SectionId from '@/types/SectionId'

export default defineComponent({
	name: 'Home',
	components: {
		WelcomeSection,
		AboutSection,
		SkillsSection,
		PortfolioSection,
	},
	props: { id: String },
	emits: ['onNavigateAfterScroll'],
	setup(props, { emit }) {
		// ------------- VARIABLES ------------- //
		const geomObjects = 1000
		let ticking = false
		let currentSlideNumber = 0
		let totalSlideNumber: number

		const scrollSensitivitySetting = 30 // Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
		const slideDurationSetting = 600 // Amount of time for which slide is "locked"

		onUpdated(() => {
			// tu sa budu menit sekcie v ramci Home
			// console.log('in onUpdated: ' + props.id)

			parallaxScrollTo(props?.id)
		})

		onMounted(() => {
			totalSlideNumber = $('.background').length
			// ------------- ADD EVENT LISTENER ------------- //
			window.addEventListener('wheel', throttledScroll, false)
			parallaxScrollTo(props?.id)
		})

		onUnmounted(() => {
			window.removeEventListener('wheel', throttledScroll)
		})

		// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
		const parallaxScroll = (evt: WheelEvent): void => {
			let delta = -evt.deltaY

			if (ticking != true) {
				if (delta <= -scrollSensitivitySetting) {
					//Down scroll
					ticking = true
					nextItem()
					slideDurationTimeout(slideDurationSetting)
				}
				if (delta >= scrollSensitivitySetting) {
					//Up scroll
					ticking = true
					previousItem()
					slideDurationTimeout(slideDurationSetting)
				}
			}
		}

		const throttledScroll = _.throttle(parallaxScroll, 60)

		const parallaxScrollTo = (id: string | undefined): void => {
			if (!id) return

			let index = $(`#${id}`).index()

			// console.log('curentSlideNumber in parallaxScrollTo: ' + currentSlideNumber, 'index: ' + index)

			while (currentSlideNumber != index) {
				if (currentSlideNumber < index) nextItem()
				else previousItem()
			}
		}

		// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
		const slideDurationTimeout = (slideDuration: number): void => {
			setTimeout(function () {
				ticking = false
			}, slideDuration)
		}

		// ------------- SLIDE MOTION ------------- //
		const nextItem = (): void => {
			if (currentSlideNumber === totalSlideNumber - 1) return

			currentSlideNumber++

			const previousSlide = $('.background').eq(currentSlideNumber - 1)
			const slideId = (
				$('.background').eq(currentSlideNumber).attr('id')
					? $('.background').eq(currentSlideNumber).attr('id')
					: 'welcome'
			) as SectionId

			previousSlide.removeClass('up-scroll').addClass('down-scroll')

			if (slideId) onNavigateAfterScroll(slideId)
		}

		const previousItem = (): void => {
			if (currentSlideNumber === 0) return

			currentSlideNumber--

			const currentSlide = $('.background').eq(currentSlideNumber)
			const slideId = (currentSlide.attr('id') ? currentSlide.attr('id') : 'welcome') as SectionId
			currentSlide.removeClass('down-scroll').addClass('up-scroll')

			if (slideId) onNavigateAfterScroll(slideId)
		}

		const onNavigateAfterScroll = (sectionId: SectionId) => {
			emit('onNavigateAfterScroll', sectionId)
		}

		return { geomObjects }
	},
})
</script>
