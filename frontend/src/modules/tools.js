export function initializeTools() {
    const toolsContent = document.getElementById('tools-content');
    if (toolsContent) {  // Ensure the element is not null
        toolsContent.innerHTML = `
            <h2>Tools</h2>
            <p>This is the content for the Tools tab.</p>
        `;
    } else {
        console.error('Element with ID "tools-content" not found.');
    }
}