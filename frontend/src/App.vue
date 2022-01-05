<template>
  <router-view/>
  <Loading />
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
	components: {
		Loading: defineAsyncComponent(() => import("@/components/modules/Loading.vue"))
	}
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  list-style: none;
  user-select: none;
  text-decoration: none;
}

ul, li {
  margin: 0;
  padding: 0;
}

html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
