<script>
import AppHeader from './components/AppHeader.vue'; 
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader, // Shorthand for AppHeader: AppHeader
    AppMain // Shorthand for AppMain: AppMain
  }
}
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
