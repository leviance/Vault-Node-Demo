import { createStore } from 'vuex';
import defaultState from "./state";

export default createStore({
	state: JSON.parse(JSON.stringify(defaultState)),

	mutations: {
		reset_sate(state) {
			Object.assign(state, JSON.parse(JSON.stringify(default_sate)));
		  },
	  
		  show_loading(state) {
			state.loading_modal = true;
		  },
	  
		  hide_loading(state) {
			state.loading_modal = false;
		  },
	},

	actions: {

	},

	modules: {

	}
})
