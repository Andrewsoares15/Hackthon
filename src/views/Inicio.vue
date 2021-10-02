<template>
  <div class="inicio">
   
    <h1 class="text-center">Games</h1>
     
    <p class="ml-3 mr-3" align="justify">Games fazem parte de nossas vidas. Em todo momento estamos imersos em gamificação.  Educação, empresas, saúde e serviços utilizam de estratégias de games em seus negócios para engajar os consumidores.</p>
    <v-img src="../assets/game.jpg" class="mt-5 mb-3 ml-3 mr-3 img" ></v-img>
    <h2 class="text-center">Games na pandemia</h2>
    <p class="ml-3 mr-3" align="justify">Quando falamos sobre a pandemia, o cenário atual fez com que ocorresse uma explosão de usos. O grupo de pesquisa de mercado NPD, publicou o 2020 Gamer Segmentation Report, que é um levantamento onde foi concluído que três em cada quatro norte-americanos estão jogando videogame em casa desde o início de 2020, representando diante dos dois últimos anos, o acréscimo de 32 milhões de pessoas.</p>
  </div>
</template>

<script>

export default {
  name: 'Inicio',
  components: {
    
  }
}
</script>
<style scoped>
@media only screen and (min-width: 600px) {
  .img{
    max-width: 60%;
    display: block;
    margin: 0 auto;
    position: relative;
    left: 20%;
  }
  p{
    max-width: 800px;
    position: relative;
    left: 25%;
  }
  
}
</style>
