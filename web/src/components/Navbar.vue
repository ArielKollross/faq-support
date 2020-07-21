<template>
    <v-app-bar
      app
      color="secondary"
      dark
    >
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

      <v-btn class="primary"
      :to="{name: 'cadastro'}"
      >
        <span class="mr-2">Enviar Pergunta</span>
        <v-icon>mdi-help-box</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    
}
</script>