<template>
  <div class="all">
    <div class="filter">
      <div class="left">
        <h2>Extensions List</h2>
      </div>
      <div class="right">
        <button @click="state=1">All</button>
        <button @click="state=2">Active</button>
        <button @click="state=3">Inactive</button>
      </div>
    </div>
    <div class="cards">
      <div class="card" v-for="(item, index) in filteredMessages(state)" :key="index">
        <div class="top">
          <img :src="strIconPath(item.path)" alt="select-icon">
          <div class="str">
            <h4>{{ item.name }}</h4>
            <p>{{ item.content }}</p>
          </div>
        </div>
        <div class="down">
          <button @click="delValue(index)">Remove</button>
          <el-switch
      v-model="item.state"
      class="ml-2"
      style="--el-switch-on-color: hsl(3, 77%, 44%); --el-switch-off-color: hsl(0, 0%, 78%)"
    />
        </div>
      </div>
      
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue';
import devlens from '@/assets/images/logo-devlens.svg' 

const messages = ref([
      { id: 1, name: "DevLens", state: false, path: "logo-devlens", content: "Quickly inspect page layouts and visualize element boundaries." },
      { id: 2, name: "StyleSpy", state: false, path: "logo-style-spy", content: "Instantly analyze and copy CSS from any webpage element."  },
      { id: 3, name: "SpeedBoost", state: false, path: "logo-speed-boost", content: "Optimizes browser resource usage to accelerate page loading." },
      { id: 4, name: "JSONWizard", state: false, path: "logo-json-wizard", content: "Formats, validates, and prettifies JSON responses in-browser." },
      { id: 5, name: "TabMaster Pro", state: false, path: "logo-tab-master-pro", content: "Organizes browser tabs into groups and sessions." },
      { id: 6, name: "ViewportBuddy", state: false, path: "logo-viewport-buddy", content: "Simulates various screen resolutions directly within the browser." },
      { id: 7, name: "Markup Notes", state: false, path: "logo-markup-notes", content: "Enables annotation and notes directly onto webpages for collaborative debugging." },
      { id: 8, name: "GridGuides", state: false, path: "logo-grid-guides", content: "Overlay customizable grids and alignment guides on any webpage." },
      { id: 9, name: "Palette Picker", state: false, path: "logo-palette-picker", content: "Instantly extracts color palettes from any webpage."  },
      { id: 10, name: "LinkChecker", state: false, path: "logo-link-checker", content: "Scans and highlights broken links on any page."  },
      { id: 11, name: "DOM Snapshot", state: false, path: "logo-dom-snapshot", content: "Capture and export DOM structures quickly."  },
      { id: 12, name: "ConsolePlus", state: false, path: "logo-console-plus", content: "Enhanced developer console with advanced filtering and logging."  }
    ]);

function strIconPath(path) {
  const fullPath = new URL(`../assets/images/${path}.svg`, import.meta.url).href;
  return fullPath;
}

const state = ref(1);

const filteredMessages = (state) => {
  console.log(state);
  if(state==1){
    return messages.value;
  }
  else if(state==2){
    return messages.value.filter(item => item.state === true);
  }
  else{
    return messages.value.filter(item => item.state === false);
  }
};


function delValue(index) {
  messages.value.splice(index, 1);
}

</script>

<style lang="sass" scoped>
  *
    // border: 1px solid black
  h2,h4
    color: var(--h24-color)
    padding: 0
    margin: 0
  p 
    color: var(--p-color)
    padding: 0
  .all
    display: flex
    flex-wrap: wrap
    .filter
      font-size: 30px
      width: 100%
      display: inline-block
      margin: 20px 0px
      @media (min-width: 970px) 
        display: flex
        justify-content: space-between
        align-items: center
    .right 
      button
        background: var(--nav-color)
        color: var(--p-color)
        border-radius: 25px
        height: 50px
        font-size: 20px
        padding: 10px 20px
        margin: 10px 10px
        width: auto
    .cards
      display: grid
      width: 100%
      grid-template-columns: repeat(auto-fill, minmax(300px,1fr))
      gap: 20px
      
    .card
      background-color: var(--nav-color)
      border-radius: 15px
      box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1)
      border: 1px solid var(--border-color)
      padding: 20px 
      height: 170px
    .top,.down 
      display: flex
      justify-content: space-between
      align-items: start
      img
        margin-right: 15px
      .str
        text-align: left
        h4
          margin: 0
        p 
          margin-top: 10px
      button
        border: 1px solid var(--border2-color)
        background: var(--nav-color)
        color: var(--p-color)
        border-radius: 25px
        height:45px
        font-size: 15px
        padding: 10px 20px
        width: auto
      button:hover
        border-color: hsl(3, 77%, 44%)
    .down
      align-items: center
</style>