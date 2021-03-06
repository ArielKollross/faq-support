import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
      iconfont: 'mdi',
    },
    theme: {
        themes: {
          light: {
            primary: '#00ADEF',
            secondary: '#FBFBFB',
            success: '#8ac926',
            error: '#ff595e',
          },
        },
      },
});