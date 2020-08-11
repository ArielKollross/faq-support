<template>
  <v-container class="my-4">
    <v-card
    tile
    class="rounded-card pa-5"
    flat
    >
      
      <v-card-title class="display-1 font-weight-bold justify-center primary--text"
      >Como podemos ajudar você?</v-card-title>


      <v-toolbar class="rounded-box" >
          <v-text-field rounded hide-details prepend-icon="mdi-magnify"
            single-line
            autofocus
            placeholder="Digite palavras-chave para encontrar sua respota."
          ></v-text-field>
      </v-toolbar>

      <v-card-subtitle class="subtitle-1 font-weight-bold text-center primary--text"
      >Você também pode acessar os tópicos abaixo para encontrar o que está procurando.</v-card-subtitle>

    <MainDoubts/>
    </v-card>

  </v-container> 
</template>

<script>
import MainDoubts from '../components/MainDoubts'
export default {
  components: {
    MainDoubts,
  }
}
</script>

<style>
.rounded-card{
    border-radius:10px;
}
.rounded-box{
    border-radius:50px;
}
</style>
