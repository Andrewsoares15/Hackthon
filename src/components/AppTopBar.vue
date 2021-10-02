<template>
  <div>
      <div class="tel">
              <a href="https://t.me/joinchat/9NfFNQRadl1hYjJh" class="time" target="_blank"><img src="https://i.imgur.com/DWJroXT.png" style="height:47px; position:fixed; bottom: 55%;right: -4px; z-index:99999;" data-selector="img"></a>

      </div>
    <v-app-bar
      
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="../assets/games.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
     
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/saude">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-bottle-tonic-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Lazer e Saúde Mental</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/games">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-gamepad</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Games</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/animes">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-movie-open</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Animes</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/sobre">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-information</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sobre</v-list-item-title>
            </v-list-item>
          </router-link>
          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app>
    </v-app>
  </div>
</template>

<script>
  export default {
    data() {
        return{
           drawer: false,
           group: null,
        }
    },
  }
</script>


<style>
a{
    text-decoration: none;
}


</style>
