<template>
   <v-container>
     <v-layout justify-center align-center>

      <v-alert 
      id="alert"
      type="error"  
      v-if="error.message" 
      max-width="600px" 
      dismissible
      >
        {{error.message}}
      </v-alert>

       <v-flex xs12 sm5 md5 >
          <v-card >

            <v-toolbar> 
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
              <v-form>
                <v-text-field
                  name="email"
                  label="email"
                  prepend-icon="mdi-account"
                  v-model.trim="$v.user.email.$model"
                ></v-text-field>

                  <v-text-field
                  name="password"
                  label="Senha"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model.trim="$v.user.password.$model"
                ></v-text-field>

              </v-form>
              <v-btn 
              type="submit"
              :disabled="$v.$invalid"
              color="primary"
              @click="handleLogin()"
              block
              >Entrar</v-btn>
            </v-card-text>

          </v-card>
       </v-flex>
     </v-layout>
     
   </v-container>
</template>

<script>
import api from '../services/api.service';

import {email, minLength, required } from 'vuelidate/lib/validators';

export default {
 data: () => ({
   user: {
     email: '',
     password: '',
   },
   error: {
     message: null,
   },
 }),
  validations: {
     user: {
      email: {
        email,
        required,
      },
      password: {
        minLength: minLength(6),
        required,
      }
    }
  },

  methods: {
    async handleLogin() {
      try {
        const response = await api.post('/sessions', {
          email: this.user.email,
          password: this.user.password,
        });

        const {user, token} = response.data;

        this.$store.dispatch('login', {user, token});
        this.$router.push('/dashboard');

      } catch (error) {
        console.log(error.response.data);
        this.error.message = "Falha ao realizar login/autenticação";
      }
    }
  }
}
</script>

<style>
 #alert{
   position: absolute;

   top: 9px;
   right: 9px;
 }
</style>