<template>
  <v-container grid-list-xs>
    <form @submit.prevent="postAnswer">
      <v-card>
        <v-card-text>
            <v-card-title primary-title>
              Criação de respostas
            </v-card-title>
          <v-row>
             <v-col cols="12" md="8">
              <v-text-field
              name="title"
              label="Título"
              v-model="answer.title"
              ></v-text-field>
            </v-col>

             <v-col cols="12" md="4">
             <v-select 
             :items="categories"
              label="Categorias"
              v-model="answer.category"
             >
             </v-select>
            </v-col>

             <v-col cols="12">
               <v-textarea 
               outlined
               v-model="answer.reply"
               >
               </v-textarea>
            </v-col>
          </v-row>
         <v-btn class="success mr-4" type="submit">Enviar</v-btn>
        </v-card-text>
      </v-card>
    </form>
  </v-container>
</template>

<script>
import api from '../services/api';

export default {
  data(){
      return{
        categories: [],
        answer: {
          title: '',
          reply: '',
          category: ''
        }
      }
  },
  created(){
    api.get('/categories')
      .then(response => {
        this.categories = response.data.map(category => {
          return category.name;
      });
    });
  },
  methods:{
    postAnswer(){
      api.post('/answers', this.answer )
    }
  }
};
</script>