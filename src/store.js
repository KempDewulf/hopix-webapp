import { createStore } from 'vuex';
import AuthenticationService from "@/modules/Authentication/Services/AuthenticationService.js";

const store = createStore({
    state: {
        isLoggedIn: false,
    },
    mutations: {
        SET_LOGIN_STATE(state, value) {
            state.isLoggedIn = value;
        },
    },
    actions: {
        async checkLoginStatus({ commit }) {
            try {
                const response = await AuthenticationService.isLoggedIn();
                if (response.status) {
                    commit('SET_LOGIN_STATE', true);
                } else {
                    commit('SET_LOGIN_STATE', false);
                }
            } catch (error) {
                commit('SET_LOGIN_STATE', false);
            }
        },
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn
    }
});

store.dispatch('checkLoginStatus');

export default store;