<template>
	<div class="home-page">
		<NavLeft />
	</div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
	components: { 
		NavLeft: defineAsyncComponent(() => import("@/components/home/NavLeft.vue"))
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
	height: 100%;
}
</style>