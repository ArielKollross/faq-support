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

            <div v-for="ans in answer" :key="ans.id">
              <router-link
                :to="{name: 'AnswerId', params: {name: 'banana'}}"
                class="font-weight-regular py-2 blue-grey--text text--darken-2"
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
      testAnswer: {
        Estoque: [
          {
            id: "48e94ec2-ce94-48f7-9630-78cb9566f010",
            title: "Cadastrando um novo produto",
            reply:
              "Para cadastrar um novo atributo vamos em config ..............",
          },
          {
            id: "4f2096e1-d51c-478a-b63f-833eb8e7aff4",
            title: "Alterando preço do Produto",
            reply: "Para alterar preço do produto ..............",
          },
        ],
        Financeiro: [
          {
            id: "9c34e639-ecc9-495f-b531-5f3604402606",
            title: "Como lançar um gasto no meu sistema",
            reply: "Para .......................",
          },
          {
            id: "5af33938-a202-480b-9dd2-9a7f54a9c7a0",
            title: "Como lançar um gasto no meu sistema",
            reply: "Para ......szddzsdzsdzsd.................",
          },
        ],
      },
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
      console.log(answerByCategory)
      return answerByCategory;
    },
  },
};
</script>

<style>
#link {
  text-decoration: none;
}
</style>