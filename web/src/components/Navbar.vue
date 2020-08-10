<template>
  <v-app>
        <v-navigation-drawer
        v-model="drawer"
        mini-variant
        app
        clipped
      >
        <v-list dense>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>


    <v-app-bar clipped-left app color="secondary" dark>
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

    <v-btn class="primary" :to="{name: 'cadastro'}" v-if="!isAuthenticated">
      <span class="mr-2">Enviar Pergunta</span>
      <v-icon>mdi-help-box</v-icon>
    </v-btn>

  </v-app-bar>
  </v-app>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.state.authenticated;
    },
  },
};
</script>