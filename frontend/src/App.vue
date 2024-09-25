<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <div class="layout">
      <ChatBar class="chat-bar" />
      <div class="resizer" @mousedown="startResize"></div>
      <main class="main-content">
        <TabNavigation />
        <div class="content-wrapper">
          <div class="settings-icon">
            <button @click="openSettings">⚙️</button>
          </div>
          <div class="tab-content">
            <router-view></router-view>
          </div>
        </div>
      </main>
    </div>
    <div class="dark-mode-toggle">
      <button @click="toggleDarkMode">
        <img :src="isDarkMode ? lightModeIcon : darkModeIcon" alt="Toggle dark mode" />
      </button>
    </div>
  </div>
</template>

<script>
import ChatBar from './components/ChatBar.vue'
import TabNavigation from './components/TabNavigation.vue'
import darkModeIcon from './assets/dark-mode-icon.svg'
import lightModeIcon from './assets/light-mode-icon.svg'

export default {
  name: 'App',
  components: {
    ChatBar,
    TabNavigation
  },
  data() {
    return {
      isDarkMode: false,
      darkModeIcon,
      lightModeIcon
    }
  },
  methods: {
    startResize(e) {
      window.addEventListener('mousemove', this.resize)
      window.addEventListener('mouseup', this.stopResize)
    },
    resize(e) {
      const app = document.getElementById('app')
      const newWidth = e.clientX / app.offsetWidth * 100
      document.documentElement.style.setProperty('--chat-width', `${newWidth}%`)
    },
    stopResize() {
      window.removeEventListener('mousemove', this.resize)
      window.removeEventListener('mouseup', this.stopResize)
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('darkMode', this.isDarkMode)
    },
    openSettings() {
      // Implement settings functionality here
      console.log('Settings clicked')
    }
  },
  mounted() {
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode !== null) {
      this.isDarkMode = JSON.parse(savedDarkMode)
    }
  }
}
</script>

<style>
:root {
  --chat-width: 20%;
  --background-color: #ffffff;
  --text-color: #000000;
  --border-color: #000000;
}

.dark-mode {
  --background-color: #000000;
  --text-color: #ffffff;
  --border-color: #ffffff;
}

#app {
  font-family: 'Virgil', cursive, sans-serif;
  height: 100vh;
  width: 100vw;
  background-color: var(--background-color);
  color: var(--text-color);
  position: relative; /* Add this line */
}

.layout {
  display: flex;
  height: 100%;
}

.chat-bar {
  width: var(--chat-width);
  min-width: 200px;
  max-width: 50%;
  border-right: 2px solid var(--border-color);
}

.resizer {
  width: 5px;
  cursor: ew-resize;
  background: var(--border-color);
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: calc(100% - var(--chat-width) - 5px);
  background-color: var(--background-color);
  color: var(--text-color);
}

.content-wrapper {
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.settings-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
}

.settings-icon button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
}

.tab-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: var(--background-color);
  color: var(--text-color);
}

.dark-mode-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.dark-mode-toggle button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.dark-mode-toggle img {
  width: 24px;
  height: 24px;
  filter: grayscale(100%);
}

/* Add these new styles */
.dark-mode .dark-mode-toggle img {
  filter: invert(1) grayscale(100%);
}
</style>