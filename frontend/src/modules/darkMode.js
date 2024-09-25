export function initializeDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {  // Ensure the element is not null
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    } else {
        console.error('Element with ID "dark-mode-toggle" not found.');
    }
}

function updateDarkModeButton() {
    const darkModeToggle = document.getElementById('toggle-dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
}