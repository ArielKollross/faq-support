<template>
    <v-container>
      <form @submit.prevent="postIssue">
            <v-card class="mx-4 mb-4" outline>
                <v-card-text class="secundary">
                  <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="cliente_name"
                        :error-messages="nameErrors"
                        :counter="40"
                        label="Nome Completo"
                        required
                        autofocus
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="2">
                        <v-text-field v-model="login_code"
                            label="Código da Empresa"
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                        <v-text-field v-model="client_email"
                        :error-messages="emailErrors"
                        label="E-mail"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                        ></v-text-field>
                    </v-col>

                   <v-col cols="12" md="12">
                      <v-textarea
                      outlined
                      v-model="question"
                      name="input-7-4"
                      label="Dúvida"
                      value="Escreva neste campo sua dúvida."
                      ></v-textarea>
                   </v-col>

                </v-row>

                <p class="primary--text font-weight-regular">
                Por se tratar de um FAQ, nossa equipe irá analiser e seleciona as dúvidas mais comuns entre nossos clientes. Caso precise tirar dúvdias de maneira mais rápida, solicite uma ligação para nosso time do atendimento ao cliente. </p>

              <v-btn class="success mr-4" type="submit">Enviar</v-btn>

              </v-card-text>

          </v-card>

            

      </form> 
    </v-container>    
</template>


<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import api from '../services/api';

 

  export default {

    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(40) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data(){
      return{
        issue: {
          cliente_name: '',
          login_code: '',
          cliente_email: '',
          question: '',
        }
      }
    },

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Nome é um campo obrigatório')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail é um campo obrigatório')
        return errors
      },
    },
    methods:{
      postIssue() {
       //const submitIssue = Object.assign({}, this.issue);
       api.post('/issues',{
        client_name: this.cliente_name ,
		    login_code: this.login_code,
		    client_email: this.cliente_email,
		    question: this.question,
       });
      },
    }
  }
</script>