<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="length"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  props: {
    length : {
      type: Number,
    },
  }, 
  data() {
    return {
      page: 1,

    }
  }
}
</script>