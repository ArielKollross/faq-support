<template>
  <v-container>
    <v-card>
      <v-card-title primary-title>
        Main Doubts
      </v-card-title>
      <MainDoubts />
    </v-card>
  </v-container>
</template>

<script>
import MainDoubts from '../components/MainDoubts'

export default {
  components: {
    MainDoubts,
  }
}
</script>