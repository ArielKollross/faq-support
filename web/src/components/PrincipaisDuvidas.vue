<template>
  <v-container fluid>
    <v-card flat tile class="rounded-card">
      <v-card-title class="font-weight-regular blue-grey--text text--darken-3">Perguntas Frequentes</v-card-title>
      <v-row no-gutters>
        <v-col v-for="faq in Faqs" :key="faq.title" cols="12" md="4" sm="4" class="pa-6">
          <v-card flat>
            <div class="primary--text title pb-2">{{faq.title}}</div>
            <v-divider></v-divider>
            <div
              v-for="sub in faq.subTitle"
              :key="sub.title"
              class="font-weight-regular py-2 blue-grey--text text--darken-2"
            >{{sub}}</div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      Faqs: [
        {
          title: "Geral",
          subTitle: {
            sub1: "Como atualizar o certificado A1",
            sub2: "Como atualizar o certificado A2",
            sub3: "Como atualizar o certificado A3",
            sub4: "Como atualizar o certificado A4"
          }
        },
        {
          title: "Vendas",
          subTitle: {
            sub1: "Como atualizar o certificado A1",
            sub2: "Como atualizar o certificado A2",
            sub3: "Como atualizar o certificado A3",
            sub4: "Como atualizar o certificado A4"
          }
        },
        {
          title: "Estoque",
          subTitle: {
            sub1: "Como atualizar o certificado A1",
            sub2: "Como atualizar o certificado A2",
            sub3: "Como atualizar o certificado A3",
            sub4: "Como atualizar o certificado A4"
          }
        },
        {
          title: "Financeiro",
          subTitle: {
            sub1: "Como atualizar o certificado A1",
            sub2: "Como atualizar o certificado A2",
            sub3: "Como atualizar o certificado A3",
            sub4: "Como atualizar o certificado A4"
          }
        },
        {
          title: "Relatórios",
          subTitle: {
            sub1: "Como atualizar o certificado A1",
            sub2: "Como atualizar o certificado A2",
            sub3: "Como atualizar o certificado A3",
            sub4: "Como atualizar o certificado A4"
          }
        }
      ]
    };
  }
};
</script>

<style>
.rounded-card {
  border-radius: 10px;
}
</style>