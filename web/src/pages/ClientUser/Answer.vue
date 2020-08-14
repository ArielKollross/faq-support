<template>
  <v-container>
    <v-card>
      <v-card-title class="display-1 justify-center primary--text py-10">{{ answer.title}}</v-card-title>

      <v-card-text class="px-12 pb-9">
        <p>{{ answer.reply}}</p>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions class="justify-center py-10">
        <v-row row class="mx-4">
          <v-col cols="12" md="6">Esse artigo foi util?</v-col>

          <v-col cols="12" md="6" class="d-flex justify-end">
            <v-btn class="mr-4" color="success">Sim</v-btn>
            <v-btn color="error">Não</v-btn>
          </v-col>


          <v-col col="12" md="12" class="d-flex justify-center">
            <v-btn 
            @click="() => $router.push('/')" 
            outlined 
            color="primary"
            >Voltar para início</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import api from "../../services/api.service";

export default {
  data() {
    return {
      answer: {},
    };
  },
  async created() {
    const id = this.$route.params.id;

    try {
      const answerFiltered = await api.get("/answers").then((response) => {
        return response.data.filter((item) => item.id === id);
      });
      console.log(answerFiltered);

      this.answer = answerFiltered[0];
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
.answer-text {
  margin: 64px auto;
}
.answer-text p {
  margin: 48px;
}
</style>