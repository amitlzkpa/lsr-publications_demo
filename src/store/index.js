import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    project: {},
    selectedSheet: {}
  },
  mutations: {
    setProject(state, project) {
      state.project = project;
      state.selectedSheet = {};
    },
    setSelectedSheet(state, sheet) {
      state.selectedSheet = sheet;
    }
  },
  getters: {
    getProject: (state) => state.project,
    getSelectedSheet: (state) => state.selectedSheet
  }
});

export default store;