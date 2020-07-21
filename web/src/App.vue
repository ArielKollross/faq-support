<template>
  <v-app style="
  background: #00ADEF;"
  >
    <Navbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    Navbar, Footer,
  },

  data: () => ({
    //
  }),
};
</script>
