export function initializeProjects() {
    // This function will be called when the Projects tab is activated
    function loadProjectsContent() {
        const tabContent = document.getElementById('tab-content');
        tabContent.innerHTML = `
            <h2>Projects</h2>
            <div id="project-list"></div>
            <button id="create-project">Create New Project</button>
            <div id="project-details" style="display: none;">
                <!-- Project details will be dynamically populated -->
            </div>
        `;
        // Add event listeners and functionality for project management
    }

    // Register the loadProjectsContent function to be called when the Projects tab is clicked
    document.querySelector('.tab-button[data-tab="projects"]').addEventListener('click', loadProjectsContent);
}