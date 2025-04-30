<script setup>
import { ref } from 'vue'
import sun from '@/assets/images/icon-sun.svg' 
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isDark = computed(() => store.getters.isDarkMode)
const toggleTheme = () => {
  store.commit('toggleDarkMode')
}

// defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>

  <div class="nav">
    <div class="logo"/>
    <div class="mode">
      <img :src="sun" class="icon" @click="toggleTheme">
    </div>
  </div>

</template>

<style scoped lang="sass">
  *
    // border: 1px solid red   
  .nav
    background-color: #fff
    display: flex
    justify-content: space-between
    border-radius: 15px
    padding: 10px
    height: 50px
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1)
    .logo
      width: 200px
      height: 100%
      background-image: url('@/assets/images/logo.svg')
      background-size: contain
      background-repeat: no-repeat
      background-position: left center
      cursor: pointer
    .mode
      width: 50px
      height: 100%
      background-color: hsl(0, 0%, 93%)
      border-radius: 15px
      display: flex
      align-items: center
      justify-content: center
      cursor: pointer
      transition: 0.5s
      .icon
        filter: brightness(0) saturate(100%) invert(0%)
      &:hover
        border: 1px solid hsl(3, 77%, 44%)
        transform: scale(1.1)
</style>
