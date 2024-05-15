import { createStore } from 'vuex';

const store = createStore({
  state: {
    items: [],
  },
  getters: {
    allItems: (state) => state.items,
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
  },
  actions: {
    fetchItems({ commit }) {
      //further implementation
      const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ];
      commit('setItems', items);
    },
  },
});

export default store;
