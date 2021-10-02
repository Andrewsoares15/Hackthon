<template>
  <v-app>
     <AppTopBar/>
     <VLibras />
    <v-main>
     <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from './components/AppTopBar.vue'
import { VLibras } from '@vue-a11y/vlibras'
export default {
  name: 'App',
  components:{
    AppTopBar,
    VLibras
  }
}
</script>
<style lang="scss">

</style>
