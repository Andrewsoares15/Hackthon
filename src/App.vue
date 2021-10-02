<template>
  <v-app>
     <AppTopBar/>
    <v-main>
     <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from './components/AppTopBar.vue'
export default {
  
  components:{
    AppTopBar
  }
}
</script>
<style>
  .titulo-container{
      display: flex;
      justify-content: center;
      margin: 20px 0 ;
    }
</style>
