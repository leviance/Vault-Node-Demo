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
            label="Role ID"
            name="roleID"
            :rules="[{ required: true, message: 'Please input your role ID!' }]"
        >
            <a-input v-model:value="formState.roleID" />
        </a-form-item>

        <a-form-item
            label="Secret ID"
            name="secretID"
            :rules="[{ required: true, message: 'Please input your secret ID!' }]"
        >
            <a-input-password v-model:value="formState.secretID" />
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
import { defineComponent, reactive } from 'vue';

export default defineComponent({
    setup() {
        const formState = reactive({
            roleID: '',
            secretID: '',
            remember: true,
        });

        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return {
            formState,
            onFinish,
            onFinishFailed,
        };
    },
});
</script>