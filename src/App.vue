<template> 
  <nav-heder/>
  <router-view/>
  <infor-footer-section/>
</template>

<script>
import InforFooterSection from './components/InforFooterSection.vue'
import NavHeder from './components/NavHeder.vue'
// import { createI18n } from 'vue-i18n'

// const i18n = createI18n({
//   // something vue-i18n options here ...
// })


export default {
  name: 'App',
  components: {
    NavHeder,
    InforFooterSection
  }
}
</script>
