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

async getData({ commit }) {
  const { token } = this.$store.state; 

  await api.get('/issues', {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        commit('setIssues', response.data);
      });
  },
}