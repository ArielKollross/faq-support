<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="#2E3234 lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="#2E3234 white--text">
        <strong>&copy; ConnectPlug</strong> {{ new Date().getFullYear() }} 
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    }),
  }
</script>