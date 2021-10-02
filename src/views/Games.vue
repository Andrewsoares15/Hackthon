<template>
  <div class="games">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Games</h1>
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