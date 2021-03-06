import store from "@/store";
import axios from "axios";
import {notification} from "ant-design-vue";

const goPathRequireAuth = (to, from, next) => {
    store.commit("showLoading");

    let timeoutID = setTimeout(() => {
        notification.error({
            message: "Không thể kết nối tới server!",
            description: "Hãy kiểm tra lại kết nối mạng của bạn, hoặc thử F5 để tải lại trang. Nếu vấn đề này còn tiếp tục vui lòng liên hệ bộ phận hỗ trợ!",
        })
    }, 3000);

    axios.get(`${process.env.VUE_APP_ROOT_API}/auth/check-login`)
        .then(() => {
            next();
        })
        .catch(() => {
            next({name: "Auth"});
        })
        .finally(() => {
            store.commit("hideLoading");
            clearTimeout(timeoutID);
        })
}

const goPathNotRequierAuth = (to, from, next) => {
    /**
     * reset all state to default
     */
    store.commit("resetState");

    store.commit("showLoading");

    let timeoutID = setTimeout(() => {
        notification.error({
            message: "Không thể kết nối tới server!",
            description: "Hãy kiểm tra lại kết nối mạng của bạn, hoặc thử F5 để tải lại trang. Nếu vấn đề này còn tiếp tục vui lòng liên hệ bộ phận hỗ trợ!",
        })
    }, 3000);

    axios.get(`${process.env.VUE_APP_ROOT_API}/auth/check-logout`)
        .then(() => {
            next();
        })
        .catch(() => {
            next({name: "Home"});
        })
        .finally(() => {
            store.commit("hideLoading");
            clearTimeout(timeoutID);
        })
}

export default {
    goPathRequireAuth,
    goPathNotRequierAuth
}