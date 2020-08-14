<template>
  <v-container>
    <v-card>
      <v-expansion-panels>
        <v-expansion-panel v-for="faq in Faqs" :key="faq.title">
          <v-expansion-panel-header class="primary--text font-weight-medium">{{faq.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>{{faq.body}}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>

<script>

export default {
  data() {
     return {
        Faqs:[
          {
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
      ],
    }
  }
};
</script>