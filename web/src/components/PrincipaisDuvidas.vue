<template>
  <v-container fluid>
    <v-card flat tile class="rounded-card">
      <v-card-title class="font-weight-regular blue-grey--text text--darken-3">Perguntas Frequentes</v-card-title>
      <v-row no-gutters>
        <v-col v-for="(answer, index) in answers" :key="index" cols="12" md="4" sm="4" class="pa-6">
          <v-card flat>
            <div class="primary--text title pb-2">{{answer.category.name}}</div>
            <v-divider></v-divider>

            <router-link
            :to="{name: 'AnswerId', params: {name: 'banana'}}"
            class="font-weight-regular py-2 blue-grey--text text--darken-2"
            id="link"
            >
            {{answer.title}}
            </router-link>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      // Faqs: [
      //   {
      //     title: "Geral",
      //     subTitle: {
      //       sub1: "Como atualizar o certificado A1",
      //       sub2: "Como atualizar o certificado A2",
      //       sub3: "Como atualizar o certificado A3",
      //       sub4: "Como atualizar o certificado A4"
      //     }
      //   },
      // ],
      answers: [],
    };
  },
  created: function() {
    api.get('/answers').then((response) => {
     this.answers = response.data;
    });
  },
};
</script>

<style>
.rounded-card {
  border-radius: 10px;
}
#link{
  text-decoration: none;
}
</style>