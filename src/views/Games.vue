<template>
  <div class="games">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Games</h1>
  </div>
</template>

<script>

export default {
  name: 'Games',
  components: {
    
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