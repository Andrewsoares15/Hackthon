<template>
  <div class="animes">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Animes</h1>
    <CardAnimes :animes="animesLista" />
  </div>
</template>

<script>
import CardAnimes from '../components/CardAnimes.vue'

export default {
  name: "Animes",
  components: {
    CardAnimes
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
