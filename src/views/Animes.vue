<template>
  <div class="animes">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Animes</h1>
    <Card :animes="animesLista" />
  </div>
</template>

<script>

export default {
  name: "Animes",
  components: {
    
  },
  data() {
    return {
      animesLista: []
    }
  },
  created() {
    fetch('https://it3zxc-default-rtdb.firebaseio.com/lazer/animes.json')
      .then(response => response.json())
      .then(json => {
        this.animesLista = json;
      })
    }
};
</script>
