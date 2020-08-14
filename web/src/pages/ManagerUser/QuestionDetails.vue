<template>
  <v-container grid-list-xs>
    <v-card>
      <v-card-title primary-title>Informações</v-card-title>
      <v-container fluid class="ma-4">
        <v-row row>
          <v-col cols="12" md="12">
            <div class="caption grey--text">Questão</div>
            {{issue.question}}
          </v-col>

          <v-col cols="12" md="6">
            <div class="caption grey--text">Criada</div>
            {{issue.created_at | date}}
          </v-col>

          <v-col cols="12" md="6" class="mb-8">
            <div class="caption grey--text">Código de Login</div>
              {{issue.login_code}}
          </v-col>
        </v-row>

        <v-card-actions>
          <v-btn color="error">Deletar</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import moment from 'moment';

export default {
  computed: {
    issue() {
      return this.$store.getters.getIssueFilteredById(
        this.$route.params.questionId
      );
    },
  },
  filters: {
    date(value) {
      return moment(value).format("DD/MM/YYYY");
    },
  },
};
</script>