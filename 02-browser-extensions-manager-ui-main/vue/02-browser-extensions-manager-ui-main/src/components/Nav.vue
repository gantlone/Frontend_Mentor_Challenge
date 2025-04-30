<script setup>
import { ref } from 'vue'
import sun from '@/assets/images/icon-sun.svg' 
import moon from '@/assets/images/icon-moon.svg' 
import DarkLogo from '@/assets/images/logo_modified.svg'
import LightLogo from '@/assets/images/logo.svg'
const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark-mode', isDark.value)
}

// defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>

  <div class="nav">
    <!-- <div class="logo"/> -->
    <DarkLogo class="logo" v-if="isDark"/>
    <LightLogo class="logo" v-else/>
    <div class="mode" @click="toggleTheme">
      <sun class="icon" v-if="isDark"/>
      <moon class="icon" v-else/>
    </div>
  </div>

</template>

<style scoped lang="sass">
  *
    // border: 1px solid red   
  .nav
    background-color: var(--nav-color)
    display: flex
    justify-content: space-between
    align-items: center
    border-radius: 15px
    padding: 10px
    height: 50px
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1)
    .logo
      
      cursor: pointer
    .mode
      width: 50px
      height: 100%
      background-color: var(--mode-color)
      border-radius: 15px
      display: flex
      align-items: center
      justify-content: center
      cursor: pointer
      transition: 0.5s
      .icon
        filter: var(--mode-filter)
      &:hover
        border: 1px solid hsl(3, 77%, 44%)
        transform: scale(1.1)
</style>
