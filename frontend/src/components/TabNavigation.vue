<template>
  <nav class="tab-navigation">
    <button v-for="tab in tabs" :key="tab" @click="selectTab(tab)" :class="{ active: currentTab === tab }">
      {{ tab }}
    </button>
  </nav>
</template>

<script>
export default {
  name: 'TabNavigation',
  data() {
    return {
      tabs: ['Models', 'Agents', 'Tools', 'Dojo', 'Projects'],
      currentTab: 'Models'
    }
  },
  methods: {
    selectTab(tab) {
      this.currentTab = tab
      // You can add logic here to change the route or emit an event to change the main content
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Virgil';
  src: url('../assets/fonts/Virgil.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.tab-navigation {
  display: flex;
  border-bottom: 2px solid var(--border-color);
  background-color: var(--background-color);
}

button {
  flex: 1;
  padding: 10px 20px;
  border: 2px solid var(--border-color);
  background: var(--background-color);
  color: var(--text-color);
  cursor: pointer;
  margin-right: -2px;
  font-size: 16px;
  font-family: 'Virgil', cursive, sans-serif;
}

button:last-child {
  margin-right: 0;
}

button.active {
  background: var(--text-color);
  color: var(--background-color);
}
</style>