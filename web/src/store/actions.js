import api from '../services/api.service';

export default {
  login(context, { user, token }) {
    context.commit('setUser', user);
    context.commit('setToken', token);
    context.commit('setAuthenticated', true);
  },

  logout(context) {
    context.commit('setUser', {});
    context.commit('setToken', null);
    context.commit('setAuthenticated', false);
  },

 getData({ commit }) {
     api.get('/issues')
      .then(response => {
        commit('setIssues', response.data);
      });
  },
}