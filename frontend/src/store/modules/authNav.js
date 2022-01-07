const defaultState = {
    listAuthMethods: null
}

export default {
    state: JSON.parse(JSON.stringify(defaultState)),

    mutations: { 

        resetState(state) {
            Object.assign(state, JSON.parse(JSON.stringify(defaultState)))
        }
    },

    actions: {
        setData({ commit, state }, {targetStore, data}) {
            commit("resetState");
            state[targetStore] = data;
        }
    }
}