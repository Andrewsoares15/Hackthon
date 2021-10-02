<template>
  <div class="games">
    <div class="titulo-container">
      <h1 class="titulo">Games</h1>
    </div>
    <CardGames :games="gamesLista" />
  </div>
</template>

<script>
import CardGames from "../components/CardGames.vue";

export default {
  name: "Games",
  components: {
    CardGames,
  },
  data() {
    return {
      gamesLista: [],
    };
  },
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json")
      .then((response) => response.json())
      .then((json) => {
        this.gamesLista = json;
      });
  },
};
</script>

<<<<<<< HEAD
<style>
  .titulo{
    color: #037682;
    font-style: bold;
  }
</style>
=======
<style scoped>
.h1 {
  font-style: bold;
  color: #037682;
}
</style>
>>>>>>> c725fdd004164acdcc20cf3621200fbfd0f0dc0b
