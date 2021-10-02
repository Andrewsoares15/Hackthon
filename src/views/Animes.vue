<template>
  <div class="animes">
    <h1 class="titulo-container">Animes</h1>
    <CardAnimes :animes="animesLista" />
  </div>
</template>

<script>
import CardAnimes from "../components/CardAnimes.vue";

export default {
  name: "Animes",
  components: {
    CardAnimes,
  },
  data() {
    return {
      animesLista: [],
    };
  },
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/animes.json")
      .then((response) => response.json())
      .then((json) => {
        this.animesLista = json;
      });
  },
};
</script>

<style scoped>
.titulo-container {
  font-style: bold;
  color: #037682;
}
</style>
