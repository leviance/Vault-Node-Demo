import { createStore } from 'vuex';
import defaultState from "./mainState";
import {notification} from "ant-design-vue";

/**
 * module
 */
import authNav from "./modules/authNav";


export default createStore({
	state: JSON.parse(JSON.stringify(defaultState)),

	mutations: {
		resetState(state) {
			Object.assign(state, JSON.parse(JSON.stringify(defaultState)));
		},
	  
		showLoading(state) {
			state.loading_modal = true;
		},
	  
		hideLoading(state) {
			state.loading_modal = false;
		},
	},

	actions: {
		handleRequestSuccess(context, res) {
			if(res.data.length)
			{
				notification.success({
					message: "Gửi yêu cầu thành công.",
					description: res.data
				})
			}
			
			else 
			{
				notification.success({
					message: "Gửi yêu cầu thành công."
				})
			}
		},

		handleRequestError(context, err) {
			if(err.response?.data?.length)
			{
				notification.error({
					message: "Đã có lỗi xảy ra!",
					description: err.response.data
				});
			}

			else 
			{
				notification.error({
					message: "Không thể kết nối tới server!",
					description: "Hãy kiểm tra lại kết nối mạng của bạn, hoặc thử F5 để tải lại trang. Nếu vấn đề này còn tiếp tục vui lòng liên hệ bộ phận hỗ trợ!",
				});
			}
		},
	},

	modules: {
		authNav
	}
})
