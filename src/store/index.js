import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: {},
		ideas_cards: [],
		ideas_cards_by_id:{},

	},

	mutations: {
		setUser(state, user) {
			state.user = user;
			localStorage.setItem('user', JSON.stringify(user));
		},

		setIdeasCard(state, ideasCard ) {
			state.ideas_cards = ideasCard;
			state.ideas_cards_by_id = state.ideas_cards.byKey('id');
		},

		updateIdeaCard(state, {id, path, data}) {
			state.ideas_cards_by_id[id][path] = data;
		},

		updateUser(state, {path, data}) {
			state.user[path] = data;
		}
	},
	actions: {
	},
	modules: {
	},
});
