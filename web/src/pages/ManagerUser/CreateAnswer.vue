<template>
  <v-container grid-list-xs>
    <form @submit.prevent="handlePostAnswer">
      <v-card>
        <v-alert
          v-if="message.error"
          id="alert"
          type="error"
          max-width="500px"
          dismissible
        >{{message.error}}</v-alert>

        <v-alert
          v-else-if="message.success"
          id="alert"
          type="success"
          max-width="500px"
          dismissible
        >{{message.success}}</v-alert>

        <v-card-text>
          <v-card-title primary-title>Criação de respostas</v-card-title>
          <v-row>
            <v-col cols="12" md="8">
              <v-text-field
              class="test"
              background-color="#efefef"
              solo
              flat
              required 
              name="title" 
              label="Título" 
              v-model="answer.title"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
              background-color="#efefef"
              class="inputfield"
              solo
              flat
              required
              :items="categories"
              label="Categorias"
              v-model="answer.category"
              ></v-select>
            </v-col>

            <v-col cols="12">
              <v-textarea
              background-color="#efefef"
              solo
              flat
              required 
              v-model="answer.reply"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-btn class="primary mr-4" type="submit">Enviar</v-btn>
        </v-card-text>
      </v-card>
    </form>
  </v-container>
</template>

<script>
import api from "../../services/api.service";

export default {
  data() {
    return {
      categories: [],
      answer: {
        title: "",
        reply: "",
        category: "",
      },
      TOKEN: this.$store.token,
      message: {
        error: null,
        success: null,
      },
    };
  },
  async created() {
    const { token } = this.$store.state;

    try {
      await api.get('/categories', {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
      }).then((response) => {
        this.categories = response.data.map((category) => {
        return category.name;
      });
    });
    } catch (error) {
      console.log(error.data);
    }

  },
  methods: {
   async handlePostAnswer() {
      const { token } = this.$store.state;

        try {
          await api.post('/answers', this.answer, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          });

          this.$router.push('/questions');
          
        } catch (error) {
          error.status == 200
            ? (this.message.success = "Reposta registrada com sucesso")
            : (this.message.error = "Erro ao submeter resposta");

          if (error.state != 200) {
            console.log(error);
          }
        }
    },
  },
};
</script>

<style>
#alert{
   position: absolute;

   top: -10px;
   right: -30px;
 }

 .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){
  background-color: #8AC926;
  color: #F8f8f8;
}
</style>