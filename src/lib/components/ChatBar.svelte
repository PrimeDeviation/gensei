<script>
  let message = '';
  let selectedModel = '';
  let selectedAgent = '';

  function sendMessage() {
    console.log('Sending message:', message);
    message = '';
  }

  function saveChat() {
    console.log('Saving chat');
  }

  function newChat() {
    console.log('Starting new chat');
  }
</script>

<div class="chat-bar">
  <div class="chat-top">
    <div class="chat-messages">
      <!-- Chat messages will be rendered here -->
    </div>
  </div>
  <div class="chat-bottom">
    <div class="chat-controls">
      <div class="dropdown-container">
        <select bind:value={selectedModel} class="roboto-text">
          <option value="">Model:</option>
          <!-- Add model options here -->
        </select>
        <select bind:value={selectedAgent} class="roboto-text">
          <option value="">Agent:</option>
          <!-- Add agent options here -->
        </select>
      </div>
    </div>
    <div class="chat-input">
      <input type="text" bind:value={message} placeholder="Type Message">
      <button on:click={sendMessage}>Send</button>
    </div>
    <div class="action-buttons">
      <button on:click={saveChat}>Save</button>
      <button on:click={newChat}>New</button>
    </div>
  </div>
</div>

<style>
  .chat-bar {
    width: var(--chat-width);
    min-width: 200px;
    max-width: 50%;
    border-right: 2px solid var(--border-color);
    display: flex;
    flex-direction: column;
    height: 100%;
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