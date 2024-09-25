export function initializeAgents() {
    const agentsContent = document.getElementById('agents-content');
    if (agentsContent) {  // Ensure the element is not null
        agentsContent.innerHTML = `
            <h2>Agents</h2>
            <p>This is the content for the Agents tab.</p>
        `;
    } else {
        console.error('Element with ID "agents-content" not found.');
    }
}