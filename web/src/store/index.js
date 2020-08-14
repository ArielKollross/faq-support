import Vue from 'vue';
import Vuex from 'vuex';

import VuePersist from 'vuex-persist';

import state from './state';
import mutations from './mutations';
import actions from './actions';
//import getters from './getters';

const vuexPersist = new VuePersist({
  key: 'faq',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state,
  mutations,
  actions,
  getters: {
    getIssues(state) {
      return state.issues;
    }
  },
  modules: {}
});
