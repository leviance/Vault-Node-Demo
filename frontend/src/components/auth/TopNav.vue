<template>
    <div class="nav-bar">
        <ul>
            <!--  -->
            <li 
                :class="{'active': menuActive == 0}"
                @click="chooseLoginMethod(0)"
            >
                <span>Tokens</span>
            </li>
            <!--  -->
            <li 
                :class="{'active': menuActive == 1}"
                @click="chooseLoginMethod(1)"
            >
                <span>Username & Password</span>
            </li>
            <!--  -->
            <li 
                :class="{'active': menuActive == 2}"
                @click="chooseLoginMethod(2)"
            >
                <span>AppRole</span>
            </li>
            <!--  -->
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuActive: 0
        }
    },

    methods: {
        chooseLoginMethod(index) {
            
            this.menuActive = index;
            this.$emit("chooseLoginMethod", index);
        }
    }
}
</script>

<style lang="scss">
.nav-bar {
    width: fit-content;
    margin: auto;
    max-width: 100%;

    ul {
        display: flex;

        li {
            margin: 0px 4px;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 3px;
        }

        li.active {
            background-color: #1890ff;
            color: #fff;
        }

        li.active:hover {
            background-color: #40a9ff;
        }
    }
}

@media (max-width: 400px) {
    .nav-bar ul li {
        margin: 10px 4px;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 3px;
    }
}
</style>