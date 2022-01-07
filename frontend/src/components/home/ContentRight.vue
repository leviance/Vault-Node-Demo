<template>
    <div class="right-content">
        <ListAuthMethods />
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
    components: {
        ListAuthMethods: defineAsyncComponent(() => import("./authenticate/ListAuthMethods.vue"))
    }
}
</script>

<style lang="scss">
.right-content {
    padding: 10px;
    // background-color: bisque;
    width: 100%;
    height: 100%;
    overflow: overlay;
}
</style>