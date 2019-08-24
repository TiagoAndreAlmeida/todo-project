import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todosList: [
            {
              id: 0,
              name: 'Teste 1',
              completed: false
            },
            {
              id: 1,
              name: 'Teste 2',
              completed: true
            },
            {
              id: 3,
              name: 'Teste 3',
              completed: false
            }
        ]
    },
    getters: {
        TODOS: state => {
            return state.todosList;
        }
    },
    mutations: {
        ADD_TODO: (state, payload) => {
            state.todosList.push(payload);
        },
        SET_COMPLETE: (state, payload) => {
            state.todosList = state.todosList.map( item => {
                console.log(item);
                if(item.id === payload){
                    item.completed = !item.completed;
                }
            });
        },
        DELETE_TODO: (state, payload) => {
            state.todosList = state.todosList.filter( item => {
                return item.id !== payload
            });
        }
    },
    actions: {
        ADD_TODO: (context, payload) => {
            context.commit("ADD_TODO", payload)
        }
    }
});