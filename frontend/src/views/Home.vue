<template>
	<div class="home-page">
		<NavLeft />
		<ContentRight />
	</div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
	components: { 
		NavLeft: defineAsyncComponent(() => import("@/components/home/NavLeft.vue")),
		ContentRight: defineAsyncComponent(() => import("@/components/home/ContentRight.vue"))
	},

	data() {
		return {

		}
	},

	methods: {
		
	}
}
</script>

<style lang="scss">
.home-page {
	display: grid;
    height: 100%;
    width: 100%;
    grid-auto-flow: column;
	grid-template-columns: max-content;
}
</style>