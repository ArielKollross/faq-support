<template>
  <v-container>
    <v-app-bar app clipped-left flat color="secondary" dark>
      <v-app-bar-nav-icon light @click="drawer = !drawer"></v-app-bar-nav-icon>

    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://blog.connectplug.com.br/wp-content/uploads/2018/03/logo.png"
        transition="scale-transition"
        width="200"
        :to="{name: 'Home'}"
      />
    </div>
    
    <v-spacer></v-spacer>

    <v-btn text color="primary" :to="{name: 'Home'}">Home</v-btn>

    <v-btn text color="primary" href="https://blog.connectplug.com.br/">Blog</v-btn>

    <v-btn text color="primary" href="https://connectplug.com.br/">Site</v-btn>

    <v-spacer></v-spacer>

    <v-btn class="primary" :to="{name: 'cadastro'}" v-if="!!isAuthenticated">
      <span class="mr-2">Enviar Pergunta</span>
      <v-icon>mdi-help-box</v-icon>
    </v-btn>

  </v-app-bar>

   <v-navigation-drawer
        v-model="drawer"
        app
        clipped
        mini-variant
      >
       <v-list dense nav>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-icon>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
      </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
   data: () => ({
    drawer: true,
    links: [
         { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
         { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
         { icon: 'mdi-cog', text: 'Team', route: '/team' },
       ]
  }),
  computed: {
    isAuthenticated() {
      console.log(!this.$store.state.authenticated);
      return this.$store.state.authenticated;
    },
  },
};
</script>