<template>
  <v-container fluid>
    <v-card flat tile>
      <v-card-title class="font-weight-regular blue-grey--text text--darken-3">Perguntas Frequentes</v-card-title>
      <v-row no-gutters >
        <v-col
          v-for="(answer,key, index) in answerByCategory"
          :key="index"
          cols="12"
          md="4"
          sm="4"
          class="pa-6"
        >
          <v-card flat>
            <div class="primary--text title pb-2">{{key}}</div>
            <v-divider></v-divider>

            <div v-for="ans in answer" :key="ans.id" class="link-group">
              <router-link
                :to="{ name: 'Answers', params: { id: ans.id }}"
                class="font-weight-regular py-2  blue-grey--text text--darken-2"
                id="link"
              >{{ans.title}}</router-link>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import api from "../services/api.service";

export default {
  data() {
    return {
      answers: [],
      answerByCategory: {},
    };
  },
  created() {
    api.get("/answers").then((response) => {
      this.answers = response.data.map((answer) => {        
        return {
          id: answer.id,
          title: answer.title,
          reply: answer.reply,
          category: answer.category.name,
        };
      });
      this.answerByCategory = this.getFilteredAnswers();
    });
  },
  methods: {
    getFilteredAnswers() {
      let answerByCategory = {};
      this.answers.forEach((el) => {
        if (!el.category) return;

        if (!answerByCategory[el.category]) {
         answerByCategory[el.category] = [
            {
              id: el.id,
              title: el.title,
              reply: el.reply,
            },
          ];
        } else
           answerByCategory[el.category].push({
            id: el.id,
            title: el.title,
            reply: el.reply,
          });
      });
      return answerByCategory;
    },
  },
};
</script>

<style>
#link {
  text-decoration: none;
}
.link-group {
  margin-top: 12px;
}
.v-application .blue-grey--text.text--darken-2{
  transition: 0.4s;
}
.v-application .blue-grey--text.text--darken-2:hover {
  color: #00ADEF !important;
}

</style>