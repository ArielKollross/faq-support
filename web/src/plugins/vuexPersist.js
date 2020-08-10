import VuePersist from 'vuex-persist';

const vuexPersist = new VuePersist({
  key: 'faq',
  storage: window.localStorage,
});

export default vuexPersist;