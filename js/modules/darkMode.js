export function initializeDarkMode() {
    const darkModeToggle = document.getElementById('toggle-dark-mode');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        updateDarkModeButton();
    });

    updateDarkModeButton();
}

function updateDarkModeButton() {
    const darkModeToggle = document.getElementById('toggle-dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
}