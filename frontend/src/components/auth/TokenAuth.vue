<template>
    <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
    >

        <a-form-item
            label="Token"
            name="token"
            :rules="[{ required: true, message: 'Please input your token!' }]"
        >
            <a-input-password v-model:value="formState.token" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import { defineComponent, reactive} from 'vue';
import { notification } from 'ant-design-vue';
import axios from 'axios';
import router from '@/router';

export default defineComponent({

    data() {
        return {
        }
    },

    setup(props, context) {
        const formState = reactive({
            token: '',
            remember: true,
        });

        const onFinish = values => {
            axios.post(`${process.env.VUE_APP_ROOT_API}/auth/token`, {token: values.token})
                .then(res => {
                    router.push("/");
                })
                .catch(err => {
                    notification.error({
                        message: "Token không hợp lệ!",
                        description: "Bạn cần nhập đúng token để đăng nhập.",
                    });
                })
        };

        const onFinishFailed = (errorInfo) => {
            notification.error({
                message: "Token không hợp lệ!",
                description: "Bạn cần nhập vào token để đăng nhập.",
            });
        };

        return {
            formState,
            onFinish,
            onFinishFailed,
        };
    },

     methods: {
    }
});
</script>

<style lang="scss">

</style>