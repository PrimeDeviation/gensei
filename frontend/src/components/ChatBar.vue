<template>
  <div class="chat-bar">
    <div class="chat-top">
      <div class="chat-messages" ref="chatMessages">
        <!-- Chat messages will be rendered here -->
      </div>
    </div>
    <div class="chat-bottom">
      <div class="chat-controls">
        <div class="dropdown-container">
          <select v-model="selectedModel">
            <option value="">Model:</option>
            <!-- Add model options here -->
          </select>
          <select v-model="selectedAgent">
            <option value="">Agent:</option>
            <!-- Add agent options here -->
          </select>
        </div>
      </div>
      <div class="chat-input">
        <input type="text" v-model="message" placeholder="Type Message">
        <button @click="sendMessage">Send</button>
      </div>
      <div class="action-buttons">
        <button @click="saveChat">Save</button>
        <button @click="newChat">New</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBar',
  data() {
    return {
      message: '',
      selectedModel: '',
      selectedAgent: '',
    }
  },
  methods: {
    sendMessage() {
      // Implement send message logic
      console.log('Sending message:', this.message);
      this.message = ''; // Clear the input after sending
    },
    saveChat() {
      // Implement save chat logic
      console.log('Saving chat');
    },
    newChat() {
      // Implement new chat logic
      console.log('Starting new chat');
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

.chat-bar {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: 2px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: 'Virgil', cursive, sans-serif;
}

.chat-top {
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
}

.chat-messages {
  padding: 10px;
}

.chat-bottom {
  border-top: 2px solid var(--border-color);
  width: 100%;
}

.chat-controls {
  padding: 10px;
  border-bottom: 2px solid var(--border-color);
}

.dropdown-container {
  display: flex;
  justify-content: space-between;
}

.chat-controls select {
  width: 48%;
  padding: 5px;
  border: 2px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: 'Virgil', cursive, sans-serif;
}

.chat-input {
  display: flex;
  padding: 10px;
  border-bottom: 2px solid var(--border-color);
}

.chat-input input {
  flex-grow: 1;
  margin-right: 10px;
  padding: 5px;
  border: 2px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: 'Virgil', cursive, sans-serif;
}

.chat-input button {
  padding: 5px 10px;
  white-space: nowrap;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.action-buttons button {
  flex: 1;
  margin: 0 5px;
}

button {
  padding: 5px 10px;
  border: 2px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-family: 'Virgil', cursive, sans-serif;
}

button:hover {
  background-color: var(--text-color);
  color: var(--background-color);
}

button:first-child {
  margin-left: 0;
}

button:last-child {
  margin-right: 0;
}
</style>