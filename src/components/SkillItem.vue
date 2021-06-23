<template>
	<div class="skill-item-wrapper">
		<div class="skill-item-header">
			<font-awesome-icon icon="chevron-right" />
			<h4>Python</h4>
		</div>
		<div class="skill-item-desc">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. In, perspiciatis odio. Nemo aspernatur temporibus
			voluptate veritatis cumque laborum aliquid at?
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineComponent({
	components: {
		FontAwesomeIcon,
	},
	setup() {
		library.add(faChevronRight, faChevronLeft)
		return {}
	},
})
</script>

<style lang="scss" scoped>
.skill-item {
	&-wrapper {
		width: 40vw;
		display: flex;
	}
	&-header {
		border: 1px solid red;
		// float: left;
	}

	&-desc {
		padding: 0 2em;
		text-align: left;
	}
}
</style>
