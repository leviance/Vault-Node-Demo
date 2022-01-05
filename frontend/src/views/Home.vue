<template>
	<div class="home-page">
		<span>Home page</span>
		<button @click="click">click me</button>
	</div>
</template>

<script>
import axios from "axios";

export default {
	methods: {
		click() {
			axios.get(`${process.env.VUE_APP_ROOT_API}/logout`)
				.then(() => {
					this.$router.push({name: "Auth"});
				})
				.catch(() => {
					this.notification.error({
						message: "Không thể kết nối tới server!",
						description: "Hãy kiểm tra lại kết nối mạng của bạn, hoặc thử F5 để tải lại trang. Nếu vấn đề này còn tiếp tục vui lòng liên hệ bộ phận hỗ trợ!",
					})
				})
		}
	}
}
</script>

<style lang="scss">

</style>