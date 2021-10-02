<template>
  <div class="inicio">
   
    <h1 class="text-center">Games</h1>
     
    <p class="text-left ml-4">Games fazem parte de nossas vidas. Em todo momento estamos imersos em gamificação.  Educação, empresas, saúde e serviços utilizam de estratégias de games em seus negócios para engajar os consumidores.</p>
    <v-img src="../assets/game.jpg" class="mt-5 mb-3 ml-3 mr-3" ></v-img>
    <h2 class="text-center">Games na pandemia</h2>
    <p class="text-left ml-4">Quando falamos sobre a pandemia, o cenário atual fez com que ocorresse uma explosão de usos. O grupo de pesquisa de mercado NPD, publicou o 2020 Gamer Segmentation Report, que é um levantamento onde foi concluído que três em cada quatro norte-americanos estão jogando videogame em casa desde o início de 2020, representando diante dos dois últimos anos, o acréscimo de 32 milhões de pessoas.</p>
      <v-card
        class="mx-auto"
        max-width="800"
      >
        <v-container fluid>
          <v-row dense>
            <v-col
              :cols="12"
            >
            <router-link to="/saude">
              <v-card>
                <v-img
                  src="../assets/saude_mental.png"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title>Lazer</v-card-title>
                </v-img>
              </v-card>
            </router-link>
            </v-col>
            
            <v-col
              
              :cols="6"
            >
             <router-link to="/animes">
              <v-card>
                <v-img
                  src="../assets/animes.jpg"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title>Animes</v-card-title>
                </v-img>
              </v-card>
             </router-link>
            </v-col>
            <v-col
              
              :cols="6"
            >
            <router-link to="/games">
              <v-card>
                <v-img
                  src="../assets/games.jpg"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                >
                  <v-card-title>Games</v-card-title>
                </v-img>
              </v-card>
            </router-link>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
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

</style>
