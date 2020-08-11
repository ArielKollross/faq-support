<template>
  <v-app 
  style="background: #efefef;"
  >
    <Navbar/>
    <v-main class="mx-2 mb-2">
      <router-view></router-view>
    </v-main>
    <Footer v-if="!isAuthenticated" />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    Navbar, 
    Footer,
  },

  data: () => ({
    //
  }),
  computed: {
    isAuthenticated() {
      return this.$store.state.authenticated;
    }
  }
};
</script>
