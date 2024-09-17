export function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContent = document.getElementById('tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            setActiveTab(tabName);
            loadTabContent(tabName);
        });
    });

    // Set default active tab
    setActiveTab('graph');
    loadTabContent('graph');
}

function setActiveTab(tabName) {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        if (button.getAttribute('data-tab') === tabName) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function loadTabContent(tabName) {
    const tabContent = document.getElementById('tab-content');
    // In a real application, you would load the content dynamically
    // For this template, we'll just set some placeholder text
    tabContent.innerHTML = `<h2>${tabName.charAt(0).toUpperCase() + tabName.slice(1)} Content</h2>
                            <p>This is the content for the ${tabName} tab.</p>`;
}