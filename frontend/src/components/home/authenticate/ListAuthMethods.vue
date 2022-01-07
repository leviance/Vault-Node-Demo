<template>
    <div class="list-auth-methods" v-if="$store.state.authNav.listAuthMethods !== null">
        <h2 class="component-title">Auth Methods</h2>
        <div class="wrap-table">
            <table>
                <tr>
                    <th>Type</th>
                    <th>Path</th>
                    <th>Description</th>
                    <th>Accessor</th>
                    <th>Local</th>
                    <th>Seal wrap</th>
                    <th>Default Lease TTL</th>
                    <th>Max Lease TTL</th>
                    <th>Token Type</th>
                    <th>Action</th>
                </tr>
                <tr v-for="(authMethod, i) in authMethodsConverted" :key="i">
                    <td>{{ authMethod.type }}</td>
                    <td>{{ authMethod.path }}</td>
                    <td>{{ authMethod.description }}</td>
                    <td>{{ authMethod.accessor }}</td>
                    <td>{{ authMethod.local }}</td>  
                    <td>{{ authMethod.sealWrap }}</td>
                    <td>{{ authMethod.defaultLeaseTTL }}</td>
                    <td>{{ authMethod.maxLeaseTTL }}</td>
                    <td>{{ authMethod.tokenType }}</td>
                    <td>
                        <button @click="removeAuthMethod(authMethod.path)">Xóa</button>
                    </td>
                </tr>
                <tr v-if="!authMethodsConverted.length">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <button>Xóa</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import {notification} from "ant-design-vue";
import axios from "axios";

export default {
    data() {
        return {
        }
    },

    methods: {
        removeAuthMethod(path) {
            if(!confirm(`Bạn có chắc muốn xóa Auth Method: ${path}`)) return false;

            axios.delete(`${process.env.VUE_APP_ROOT_API}/auth-method/${path}`)
                .then(() => {
                    delete this.$store.state.authNav.listAuthMethods[path];
                    notification.success({
                        message: `Đã xóa thành công Auth Method: ${path}`
                    })
                })
                .catch(err => {
                    this.$store.dispatch("handleRequestError", err);
                })
        }
    },

    computed: {
        /**
         * convert list auth methods from object to array
         */
        authMethodsConverted() {
            let listAuthMethods = this.$store.state.authNav.listAuthMethods;

            if(!listAuthMethods) return [];

            const converted = [];

            Object.keys(listAuthMethods).forEach(key => {
                const modelObject = {};

                modelObject.type = listAuthMethods[key].type;
                modelObject.path = key;
                modelObject.description = listAuthMethods[key].description;
                modelObject.accessor = listAuthMethods[key].accessor;
                modelObject.local = listAuthMethods[key].local ? "Yes" : "No";
                modelObject.sealWrap = listAuthMethods[key].seal_wrap ? "Yes" : "No";
                modelObject.defaultLeaseTTL = listAuthMethods[key].config.default_lease_ttl;
                modelObject.maxLeaseTTL = listAuthMethods[key].config.max_lease_ttl;
                modelObject.tokenType = listAuthMethods[key].config.token_type;

                converted.push(modelObject);
            })

            return converted;
        }
    }
}
</script>

<style lang="scss">
.list-auth-methods {
    width: 100%;
    height: 100%;

    .component-title {
        padding: 20px 0 30px 0;
        text-align: center;
    }

    .wrap-table {
        width: 100%;
        height: auto;
        overflow-x: overlay;
        padding-bottom: 200px;

        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            white-space: nowrap;
        }
    }
}

</style>