export function initializeProjects() {
    const projectsContent = document.getElementById('projects-content');
    if (projectsContent) {  // Ensure the element is not null
        projectsContent.innerHTML = `
            <h2>Projects</h2>
            <p>This is the content for the Projects tab.</p>
        `;
    } else {
        console.error('Element with ID "projects-content" not found.');
    }
}