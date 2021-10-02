<template>
  <div class="inicio">
     
    <v-img src="../assets/JoyTogether.jpg" class="mt-5 mb-3 ml-3 mr-3" ></v-img>
    <p class="text-left ml-4">Entretenimento e diversão, venha fazer parte. Você não está sozinho(a). 💙</p>
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
