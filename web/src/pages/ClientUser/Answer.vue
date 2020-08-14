<template>
  <v-container>
    <v-card>
      <v-card-title class="display-1 justify-center primary--text py-10"
        >{{ answer.title}}</v-card-title> 

      <v-card-text class="px-12 pb-9">
        <p> {{ answer.reply}} </p>
      </v-card-text>
        <v-divider></v-divider>

        <v-card-actions class="justify-center py-10">
          <v-btn
          @click="() => $router.push('/')" 
          outlined color="primary">Voltar para início</v-btn>
        </v-card-actions>

    </v-card>
  </v-container>
</template>

<script>
import api from '../../services/api.service';

export default {
  data() {
        return {
            answer: {}
        }
    },
 async created()  {
    const id = this.$route.params.id;

    try {
      const answerFiltered = await api.get('/answers')
      .then(response => {
        return response.data.filter(item => item.id === id);
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
.answer-text p{ 
  margin: 48px;
}
</style>