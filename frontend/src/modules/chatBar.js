export function initializeChatBar() {
    const chatBar = document.getElementById('chat-bar');
    if (chatBar) {  // Ensure the element is not null
        chatBar.innerHTML = `
            <h2>Chat Bar</h2>
            <p>This is the content for the Chat Bar.</p>
        `;
    } else {
        console.error('Element with ID "chat-bar" not found.');
    }
}