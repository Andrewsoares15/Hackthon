<template>
  <div class="games">
    <div class="titulo-container">
      <h1>Games</h1>
    </div>
    <CardGames :games="gamesLista" />
  </div>
</template>

<script>
import CardGames from '../components/CardGames.vue'

export default {
  name: 'Games',
  components: {
    CardGames
  },
  data() {
    return {
      gamesLista: []
    }
  },
    created() {
      fetch('https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json')
        .then(response => response.json())
        .then(json => {
          this.gamesLista = json;
        })
    }
  }
</script>

<style scoped>
</style>