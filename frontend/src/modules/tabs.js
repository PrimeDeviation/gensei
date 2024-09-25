export function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            loadTabContent(tabId);
            setActiveTab(button);
        });
    });
}

function loadTabContent(tabId) {
    const tabContent = document.getElementById('tab-content');
    if (tabContent) {  // Ensure the element is not null
        tabContent.innerHTML = `
            <h2>${tabId} Content</h2>
            <p>This is the content for the ${tabId} tab.</p>
        `;
    } else {
        console.error('Element with ID "tab-content" not found.');
    }
}

function setActiveTab(activeButton) {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}