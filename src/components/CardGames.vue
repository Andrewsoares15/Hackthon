<template>
  <v-card
      class="mx-auto"
      max-width="800"
    >
    <v-spacer></v-spacer>   
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(game,index) of games"
          :key="index"
          cols="6"
        >
          <v-card>
            <v-img
              :src="game.photo"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="game.name"></v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
    name: 'CardGames',
    props: {
        games: {
            type: Array,
        },
        animes:{
            type: Array,
        }
    }
}
</script>