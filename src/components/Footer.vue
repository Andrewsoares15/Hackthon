<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">#AnywhereTogether - <v-avatar>
      <a href="https://t.me/joinchat/9NfFNQRadl1hYjJh">
          <img
        src="../assets/telegram3.png"
        alt="Telegram"
      >
      </a>
    </v-avatar> </strong>

        <v-spacer></v-spacer>

        
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Joy Together</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>