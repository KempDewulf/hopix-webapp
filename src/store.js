import { createStore } from 'vuex';

const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
};

export default createStore({
    state: initialState,
    mutations: {
        SET_LOGIN_STATE(state, value) {
            state.isLoggedIn = value;
            localStorage.setItem('isLoggedIn', JSON.stringify(value));
        },
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn
    }
});