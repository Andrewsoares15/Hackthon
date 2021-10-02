<template>
  <v-app>
     <AppTopBar/>
     <VLibras />
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
</style>
