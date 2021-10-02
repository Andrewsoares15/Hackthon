<template>
  <v-card
      class="mx-auto"
      max-width="800"
    >
    <v-spacer></v-spacer>   
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(anime,index) of animes"
          :key="index"
          cols="6"
        >
          <v-card>
            <v-img
              :src="anime.photo"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="anime.name"></v-card-title>
              <v-card-subtitle>Genêro: {{anime.genre}}</v-card-subtitle>
            </v-img>
            <v-card-actions>
                 <v-btn
                    color="primary"
                    text
                    @click="dialog = true"
                >
                    Sinopse
                </v-btn>
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
    name: 'CardAnimes',
    data () {
      return {
        dialog: false,
      }
    },
    props: {
        animes: {
            type: Array,
        }
    }
}
</script>