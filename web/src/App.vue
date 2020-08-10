<template>
  <v-app 
  style="background: #00ADEF;"
  >
    <Navbar/>
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
    <!-- <Footer/> -->
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
//import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    Navbar, 
    // Footer,
  },

  data: () => ({
    //
  }),
};
</script>
