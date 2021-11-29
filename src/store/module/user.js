const state = {
    count: 555,
}

const mutations = {
    add(state){
        state.count ++;
    }
}

const actions = {
    add({ commit }){
        commit('add');
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}