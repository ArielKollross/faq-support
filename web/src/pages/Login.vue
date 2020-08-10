<template>
   <v-container>
     <v-layout justify-center align-center>
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
     loading: false,
     message: '' 
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
    log() {
      console.log('Vuelidate: ', this.$v);
     },
     submit() {
       console.log('User: ', this.user);
     },
    async handleLogin() {
      try {
        const response = await api.post('/sessions', {
          email: this.user.email,
          password: this.user.password,
        });

        const {user, token} = response.data;
        this.$store.dispatch('login', {user, token});

      } catch (error) {
        console.log(error);
      }

      // this.loading = true;
      // this.$validator.validateAll().then(isValid => {
      //   if (!isValid) {
      //     this.loading = false;
      //     return;
      //   }
      //   if (this.user.email && this.user.password) {
      //     this.$store.dispatch('auth/login', this.user).then(
      //       () => {
      //         console.log('logado!!');
      //       },
      //       error => {
      //         this.loading = false;
      //         this.message =
      //           (error.response && error.response.data) ||
      //           error.message ||
      //           error.toString();
      //       }
      //     );
      //   }
      // });
    }
  }
}
</script>

<style>
  
</style>