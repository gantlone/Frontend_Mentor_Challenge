<script setup>
  import Nav from './components/Nav.vue';
  import Content from './components/Content.vue';
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore();
  const isDark = computed(() => store.getters.isDarkMode);
</script>

<template>
  <!-- <div :class="{ 'dark-theme': isDark, 'light-theme': !isDark }"> -->
    <Nav/>
    <Content/>
  <!-- </div> -->

</template>

<style lang="sass" scoped>
  *
    // border: 1px solid black
    display: flex

</style>