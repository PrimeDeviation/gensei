export function initializeDojo() {
    const dojoContent = document.getElementById('dojo-content');
    if (dojoContent) {  // Ensure the element is not null
        dojoContent.innerHTML = `
            <h2>Dojo</h2>
            <p>This is the content for the Dojo tab.</p>
        `;
    } else {
        console.error('Element with ID "dojo-content" not found.');
    }
}