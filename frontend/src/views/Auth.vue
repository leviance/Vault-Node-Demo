<template>
	<div class="auth-page">
		<div class="wrap-nav">
			<TopNav v-on:chooseLoginMethod="chooseLoginMethod" />
		</div>
		<div class="wrap-form-content">
			<div class="wrap-ant-form">
				<TokenAuth v-show="formIndex == 0" />
				<UsernamePasswordAuth v-show="formIndex == 1" />
				<AppRoleAuth v-show="formIndex == 2" />
			</div>
		</div>
	</div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
	components: {
		TokenAuth: defineAsyncComponent(() => import("@/components/auth/TokenAuth.vue")),
		AppRoleAuth: defineAsyncComponent(() => import("@/components/auth/AppRoleAuth.vue")),
		UsernamePasswordAuth: defineAsyncComponent(() => import("@/components/auth/UsernamePasswordAuth.vue")),
		TopNav: defineAsyncComponent(() => import("@/components/auth/TopNav.vue")),
	},

	data() {
		return {
			formIndex: 0
		}
	},

	methods: {
		chooseLoginMethod(index) {
			this.formIndex = index;
		}
	}
}
</script>

<style lang="scss">
.auth-page {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	.wrap-nav {
		width: 100%;
	}

	.wrap-form-content {
		height: 100%;
		width: 550px;
		max-width: 90%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;

		.wrap-ant-form {
			width: 100%;
		}
	}
}
</style>