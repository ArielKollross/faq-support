<template>
   <v-container>
     <v-layout justify-center align-center>
       <v-flex xs12 sm6 md4 >
          <v-card>

            <v-toolbar>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
              <v-form>
                <v-text-field
                  name="login"
                  label="Login"
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
              :disabled="$v.$invalid"
              block color="primary" 
              @click="submit"
              >
              Entrar</v-btn>
            </v-card-text>

          </v-card>
       </v-flex>
     </v-layout>
     
   </v-container>
</template>

<script>
import {email, minLength, required } from 'vuelidate/lib/validators';

export default {
  name: 'Login',
 data: () => ({
   user: {
     email: '',
     password: '',
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
     }
  }
}
</script>

<style>
  
</style>