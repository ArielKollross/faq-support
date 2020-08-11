<template>
  <v-container>
    <v-app-bar app clipped-left flat color="secondary" dark>
      <v-app-bar-nav-icon light @click="drawer = !drawer" v-if="isAuthenticated"></v-app-bar-nav-icon>

          
      <div class="d-flex align-center" @click="handleRerirectHome" >
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://blog.connectplug.com.br/wp-content/uploads/2018/03/logo.png"
          transition="scale-transition"
          width="200"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn v-if="!isAuthenticated" text color="primary" :to="{name: 'Home'}">Home</v-btn>

      <v-btn
        v-if="!isAuthenticated"
        text
        color="primary"
        href="https://blog.connectplug.com.br/"
      >Blog</v-btn>

      <v-btn v-if="!isAuthenticated" text color="primary" href="https://connectplug.com.br/">Site</v-btn>

      <v-spacer></v-spacer>

      <v-btn v-if="!isAuthenticated" class="primary" :to="{name: 'cadastro'}">
        <span class="mr-2">Enviar Pergunta</span>
        <v-icon>mdi-help-box</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-if="isAuthenticated" v-model="drawer" app clipped mini-variant>
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

      <template v-slot:append>
        <v-list-item-icon class="ml-4">
          <v-icon @click="handleLogout">mdi-logout</v-icon>
        </v-list-item-icon>
      </template>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    links: [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/dashboard" },
      {
        icon: "mdi-comment-question",
        text: "My Projects",
        route: "/submit-answer",
      },
      {icon: 'mdi-format-list-checks', text: "Lista de perguntas", route: '/questions'},
      { icon: "mdi-home", text: "home", route: "/" },
    ],
  }),
  methods: {
    handleLogout() {
      console.log("deslogado!");
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    handleRerirectHome() {
      if(this.$route !== '/') {
        this.$router.push("/");
      }
      return;
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.authenticated;
    },
  },
};
</script>