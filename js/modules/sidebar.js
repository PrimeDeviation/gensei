export function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    // In a real application, you would load the sidebar content dynamically
    // For this template, we'll just set some placeholder content
    sidebar.innerHTML = `
        <h2>Sidebar</h2>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    `;
}