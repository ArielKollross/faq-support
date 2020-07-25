<template>
  <v-container>
    <v-card>
            <v-card-title class="display-1 justify-center primary--text"
      >Pergunta</v-card-title> 

        <v-card-subtitle class="subtitle-1 font-weight-bold text-center primary--text"
      >{{}}</v-card-subtitle>

      <div class="answer-text">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores alias, quaerat nam molestiae velit suscipit fuga dolorum minus ab blanditiis id commodi quae, provident omnis reprehenderit modi quibusdam adipisci libero!</p>
      </div>

    </v-card>
  </v-container>
</template>

<script>

export default {
  data() {
     return {
    }
  }
};
</script>

<style>
.answer-text {
  margin: 64px auto;
}
.answer-text p{ 
  margin: 48px;
}
</style>