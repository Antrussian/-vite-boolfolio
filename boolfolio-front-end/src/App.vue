<script>
import AppHeader from './components/AppHeader.vue'; 
import AppMain from './components/AppMain.vue';


export default {
  components: [
    AppHeader,
    AppMain
    ]
}
</script>

<template>
    <AppHeader />
    <AppMain />

    
  <h1>
    Ciaoooo
  </h1>
</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
