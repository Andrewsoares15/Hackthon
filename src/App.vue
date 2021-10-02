<template>
  <v-app>
      <VLibras />
     <AppTopBar/>
     
    <v-main>
     <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import AppTopBar from './components/AppTopBar.vue'
import { VLibras } from '@vue-a11y/vlibras'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components:{
    AppTopBar,
    VLibras,
    Footer
  }
}
</script>
<style >
  .titulo-container{
      display: flex;
      justify-content: center;
      margin: 20px 0 ;
    }
    .v-application--wrap{
      min-height: 0;
    }
</style>

