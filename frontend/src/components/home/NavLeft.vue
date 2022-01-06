<template>
    <div :class="{'with-fit-content': fitWith}" style="width: 256px; height: 100%; position: relative;">



        <!-- button toggle menu -->
        <a-button type="primary" style="position: absolute; top: 10px; left: 15px;" @click="toggleCollapsed">
            <MenuUnfoldOutlined v-if="collapsed" />
            <MenuFoldOutlined v-else />
        </a-button>
        <!-- end button toggle menu -->



        <!-- menu -->
        <a-menu
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            mode="inline"
            theme="light"
            :style="{'height': '100%', 'padding-top': '50px'}"
            :inline-collapsed="collapsed"
            @click="clickNav"
        >


            <!-- authenticate -->
            <a-sub-menu key="authenticate">
                <template #icon>
                    <SafetyCertificateOutlined />
                </template>
                <template #title>Authenticate</template>

                <!-- auth with AppRole -->
                <a-sub-menu key="approle">
                    <template #icon>
                        <TrademarkCircleOutlined />
                    </template>
                    <template #title>AppRole</template>
                    <a-menu-item key="enable-approle">Enabled AppRole</a-menu-item>
                    <a-menu-item key="read-approle">Read AppRole</a-menu-item>
                    <a-menu-item key="list-roles">List Roles</a-menu-item>
                    <a-menu-item key="create-approle">Create AppRole</a-menu-item>
                    <a-menu-item key="update/delete-approle">Update/Delelete AppRole</a-menu-item>
                    <a-menu-item key="disable-approle">Disable AppRole</a-menu-item>
                </a-sub-menu>
                <!-- end auth with AppRole -->

                <!-- auth with Username Password -->
                <a-sub-menu key="username-password">
                    <template #icon>
                        <TeamOutlined />
                    </template>
                    <template #title>Username Password</template>
                    <a-menu-item key="51">Enabled Approle</a-menu-item>
                    <a-menu-item key="61">Option 6</a-menu-item>
                    <a-menu-item key="71">Option 7</a-menu-item>
                    <a-menu-item key="41">Option 8</a-menu-item>
                </a-sub-menu>
                <!-- end auth with Username Password -->

                <!-- get list auth methods -->
                <a-menu-item key="auth-methods">
                    <template #icon>
                        <FileProtectOutlined />
                    </template>
                    <span>Auth Methods</span>
                </a-menu-item>
                <!-- end get list auth methods -->

            </a-sub-menu>
            <!-- end authenticate -->


            <!-- secret -->
            <a-sub-menu key="secret">
                <template #icon>
                    <KeyOutlined />
                </template>
                <template #title>Secret Managerment</template>
                <a-menu-item key="5">Enabled Approle</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-menu-item key="7">Option 7</a-menu-item>
                <a-menu-item key="8">Option 8</a-menu-item>
            </a-sub-menu>
            <!-- end secret -->


            <!-- database credential-->
            <a-sub-menu key="database">
                <template #icon>
                    <DatabaseOutlined />
                </template>
                <template #title>Database Credential</template>
                <a-menu-item key="9">Option 9</a-menu-item>
                <a-menu-item key="10">Option 10</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                    <a-menu-item key="11">Option 11</a-menu-item>
                    <a-menu-item key="12">Option 12</a-menu-item>
                </a-sub-menu>
            </a-sub-menu>
            <!-- end database credential -->

            
            <!-- button logout -->
            <a-menu-item key="btn-logout">
                <template #icon>
                    <LogoutOutlined />
                </template>
                <span>Logout</span>
            </a-menu-item>
            <!-- end button logout -->


        </a-menu>
        <!-- end menu -->
    </div>
</template>


<script>
import axios from "axios";
import { defineComponent, reactive, toRefs, watch } from "vue";
import {notification} from "ant-design-vue";
import { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined, DatabaseOutlined, KeyOutlined, TeamOutlined, TrademarkCircleOutlined, SafetyCertificateOutlined, FileProtectOutlined } from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        MenuFoldOutlined,
        MenuUnfoldOutlined,
        LogoutOutlined,
        DatabaseOutlined,
        KeyOutlined,
        TeamOutlined,
        TrademarkCircleOutlined,
        SafetyCertificateOutlined,
        FileProtectOutlined
    },

    setup() {
        const state = reactive({
            collapsed: false,
            selectedKeys: ['1'],
            openKeys: ['sub1'],
            preOpenKeys: ['sub1'],
            fitWith: false
        });

        watch(() => state.openKeys, (_val, oldVal) => {
            state.preOpenKeys = oldVal;
        });

        const toggleCollapsed = () => {
            state.fitWith = !state.fitWith;
            state.collapsed = !state.collapsed;
            state.openKeys = state.collapsed ? [] : state.preOpenKeys;
        };

        return { 
            ...toRefs(state),
            toggleCollapsed
        };
    },

    methods: {
        /**
         * when clicking on the menu navigate to the corresponding function
         */
        clickNav({key}) {
            console.log(key);
            switch (key) {
                case "btn-logout":
                    this.logout();
                    break;

                case "enable-approle":
                    this.enableApprole();
                    break;

                case "auth-methods":
                    this.getAuthMethods();
                    break;
            }
        },

        /**
         * anable auth method AppRole
         */
        enableApprole() {
            const path = prompt("Nhập vào Path: ")
                
            if(!path)
            {
                notification.error({
                    message: "Enable AppRole thất bại!",
                    description: "Bạn cần nhập vào path để enable AppRole."
                });

                return false;
            }

            axios.post(`${process.env.VUE_APP_ROOT_API}/enable-approle`, {path})
                .then(res => {
                    this.$store.dispatch("handleRequestSuccess", res);
                })
                .catch(err => {
                    this.$store.dispatch("handleRequestError", err);
                })
        },

        /**
         * get list Auth Method
         */
        getAuthMethods() {
            axios.get(`${process.env.VUE_APP_ROOT_API}/auth-methods`)
                .then(res => {
                    console.log(res);
                })
                .catch(err => { 
                    this.$store.dispatch("handleRequestError", err);
                })
        },

        /**
         * user logout
         */
        logout() {
			axios.get(`${process.env.VUE_APP_ROOT_API}/logout`)
				.then(() => {
					this.$router.push({name: "Auth"});
				})
				.catch(() => {
					this.$store.dispatch("handleRequestError");
				})
		}
    }

});
</script>

<style lang="scss">
.with-fit-content {
    width: fit-content !important;
}
</style>