import { createStore } from "vuex";

const state = {
    count: 1
}

const getters = {
    // getCount() {
    //     return state.count
    // }
    count: state => state.count
}

const actions = {

    setCount5({ commit }) {
        commit('setCountIs5')
    },
    addCount({ state, commit }, payload) {
        console.log("state.count")
        console.log(state.count)
        console.log(payload)
        commit('setCountIsWhat', state.count + payload)
    },

    minusCount({ state, commit }, payload) {
        commit('setCountIsWhat', state.count - payload)
    }

}

const mutations = {

    setCountIs5(state) {
        state.count = 5
    },

    setCountIsWhat(state, payload) {
        state.count = payload
    }
}
const store = createStore({
    state,
    getters,
    actions,
    mutations
})



export default store;