import { createStore } from 'vuex'

// import {SET_USER} from "./mutations.js"
// import user from "./modules/user.js";

const store = createStore({
    state: {
        count: 10,
        name: "wo shi shei",
        user: null,
        token: 'this is token',
    },
    //相当于computed
    getters:{
        gname: state => {return state.name+" getter"},
        gcount: state => (param) => {return state.count + param}
    },
    mutations: {
        add (state, n) {
            state.count+=n;
        },
    },
    actions: {
        ac_add({commit}, obj) {
            commit("add", obj);
        },
        //异步操作
        async_add({commit}, obj) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('add',obj)
                    resolve()
                    reject();
                }, 1000)
            });
        },

    },
    modules: {

    }
})
//上面的store暴露出去
export default store;