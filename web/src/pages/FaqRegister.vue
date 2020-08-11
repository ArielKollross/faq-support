<template>
  <v-container>
    <form @submit.prevent="handlePostIssue">
      <v-card class="mx-4 mb-4" flat>
        <v-card-text class="secundary">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                solo
                flat
                background-color="#efefef"
                v-model="issue.client_name"
                label="Nome Completo"
                required
                autofocus
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
              <v-text-field
                id="login-code-field" 
                solo
                flat
                background-color="#efefef"
              v-model="issue.login_code" label="Código da Empresa" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                solo
                flat
                background-color="#efefef"
                v-model="issue.client_email"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12">
              <v-textarea
                solo
                flat
                background-color="#efefef"
                required
                v-model="issue.question"
                name="input-7-4"
                label="Dúvida"
                value="Escreva neste campo sua dúvida."
              ></v-textarea>
            </v-col>
          </v-row>

          <p
            class="primary--text font-weight-regular"
          >Por se tratar de um FAQ, nossa equipe irá analiser e seleciona as dúvidas mais comuns entre nossos clientes. Caso precise tirar dúvdias de maneira mais rápida, solicite uma ligação para nosso time do atendimento ao cliente.</p>

          <v-btn class="success mr-4" type="submit">Enviar</v-btn>
        </v-card-text>
      </v-card>
    </form>
  </v-container>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import api from "../services/api.service";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(40) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data() {
    return {
      issue: {
        client_name: '',
        login_code: '',
        client_email: '',
        question: '',
      },
    };
  },
  computed: {
  },
  methods: {
    handlePostIssue() {
      api.post("/issues", this.issue);
    },
  },
};
</script>

<style>
#login-code-field{
  max-width: 200px;
}
</style>