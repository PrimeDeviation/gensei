export function initializeUserProfile() {
    const userProfileContent = document.getElementById('user-profile-content');
    if (userProfileContent) {  // Ensure the element is not null
        userProfileContent.innerHTML = `
            <h2>User Profile</h2>
            <p>This is the content for the User Profile tab.</p>
        `;
    } else {
        console.error('Element with ID "user-profile-content" not found.');
    }
}