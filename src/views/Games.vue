<template>
  <div class="games">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Games</h1>
    <Card :games="gamesLista" />
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'Games',
  components: {
    Card
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
          console.log(this.gamesLista)
        })
    }
  }
</script>