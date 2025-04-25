<template>
  <div class="filter">
    <div class="left">
      <h2>Extensions List</h2>
    </div>
    <div class="right">
      <button>All</button>
      <button>Active</button>
      <button>Inactive</button>
    </div>
  </div>
  <div class="cards">
    <div class="card" v-for="(item, index) in messages">
      <div class="top">
        <img :src="strIconPath(item.path)" alt="select-icon">
        <div class="str">
          <h4>{{ item.name }}</h4>
          <p>{{ item.content }}</p>
        </div>
      </div>
      <div class="down">
        <button>Remove</button>
        <div class="ios-switch active">
          <div class="switch-body">
            <div class="toggle">

            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import devlens from '@/assets/images/logo-devlens.svg' 

const messages = ref([
      { name: "DevLens", state: false, path: "logo-devlens", content: "Quickly inspect page layouts and visualize element boundaries." },
      { name: "StyleSpy", state: false, path: "logo-style-spy", content: "Instantly analyze and copy CSS from any webpage element."  },
      { name: "SpeedBoost", state: false, path: "logo-speed-boost", content: "Optimizes browser resource usage to accelerate page loading." },
      { name: "JSONWizard", state: false, path: "logo-json-wizard", content: "Formats, validates, and prettifies JSON responses in-browser." },
      { name: "TabMaster Pro", state: false, path: "logo-tab-master-pro", content: "Organizes browser tabs into groups and sessions." },
      { name: "ViewportBuddy", state: false, path: "logo-viewport-buddy", content: "Simulates various screen resolutions directly within the browser." },
      { name: "Markup Notes", state: false, path: "logo-markup-notes", content: "Enables annotation and notes directly onto webpages for collaborative debugging." },
      { name: "GridGuides", state: false, path: "logo-grid-guides", content: "Overlay customizable grids and alignment guides on any webpage." },
      { name: "Palette Picker", state: false, path: "logo-palette-picker", content: "Instantly extracts color palettes from any webpage."  },
    ]);

function strIconPath(path) {
  const fullPath = new URL(`../assets/images/${path}.svg`, import.meta.url).href;
  return fullPath;
}

</script>

<style lang="sass" scoped>
  *
    border: 1px solid black
  h2,h4
    color: hsl(227, 75%, 14%) 
  p 
    color: hsl(226, 11%, 37%)
  .filter
    padding-top: 30px
    font-size: 30px
    display: inline-block
    @media (min-width: 970px) 
      display: flex
      justify-content: space-between
  .top,.down 
    display: flex
    justify-content: space-between
  .cards
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    
  .card
    background-color: #fff
    border-radius: 15px
    margin: 10px 0px
    display: inline-block
    @media (min-width: 500px)
      width: 350px
    
  .ios-switch
    display: flex
    flex-direction: row
    align-items: center
    margin: 10px 0
  .ios-switch .switch-body
    width: 96px
    background-color: hsl(0, 0%, 78%)
    border-radius: 48px
    box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.1)
  .ios-switch .switch-body .toggle
    width: 36px
    height: 36px
    background-color: #fff
    border-radius: 50%
    margin: 5px
</style>