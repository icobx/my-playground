<template>
	<div class="paralax">
		<p>ID: {{ id }}</p>
		<welcome-section />
		<about-section />
		<skills-section />
		<portfolio-section />
	</div>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from 'vue'
import $ from 'jquery'
import * as _ from 'underscore'

import WelcomeSection from '../components/WelcomeSection.vue'
import AboutSection from '../components/AboutSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import PortfolioSection from '../components/PortfolioSection.vue'

export default defineComponent({
	name: 'Home',
	components: {
		WelcomeSection,
		AboutSection,
		SkillsSection,
		PortfolioSection,
	},
	props: { id: String },
	setup(props) {
		onUpdated(() => {
			// tu sa budu menit sekcie v ramci Home
			console.log('in onUpdated: ' + props.id)

			parallaxScrollTo(props?.id)
		})
		// ------------- VARIABLES ------------- //
		let ticking = false
		let currentSlideNumber = 0

		const scrollSensitivitySetting = 30 // Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
		const slideDurationSetting = 600 // Amount of time for which slide is "locked"
		const totalSlideNumber = $('.background').length

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

		const parallaxScrollTo = (id: string | undefined): void => {
			if (!id) return

			let index = $(`#${id}`).index() - 1

			console.log(currentSlideNumber, index)
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

		// ------------- ADD EVENT LISTENER ------------- //
		window.addEventListener('wheel', _.throttle(parallaxScroll, 60), false)

		// ------------- SLIDE MOTION ------------- //
		const nextItem = (): void => {
			if (currentSlideNumber === totalSlideNumber - 1) return

			currentSlideNumber++

			const $previousSlide = $('.background').eq(currentSlideNumber - 1)
			$previousSlide.removeClass('up-scroll').addClass('down-scroll')
		}

		const previousItem = (): void => {
			if (currentSlideNumber === 0) return

			currentSlideNumber--

			const $currentSlide = $('.background').eq(currentSlideNumber)
			$currentSlide.removeClass('down-scroll').addClass('up-scroll')
		}
	},
})
</script>
