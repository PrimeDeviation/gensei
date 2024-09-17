export function initializeDemoHelper() {
    const helperAnimation = document.getElementById('helper-animation');

    function showHelperAnimation(animationKey) {
        // Load and display the appropriate animation based on the key
        helperAnimation.innerHTML = `<div class="animation" data-animation="${animationKey}"></div>`;
        helperAnimation.style.display = 'block';
    }

    function hideHelperAnimation() {
        helperAnimation.style.display = 'none';
    }

    // Example usage:
    // document.querySelector('.config-point').addEventListener('mouseover', () => showHelperAnimation('model-config'));
    // document.querySelector('.config-point').addEventListener('mouseout', hideHelperAnimation);

    return {
        showHelperAnimation,
        hideHelperAnimation
    };
}

export function loadDemoProject(projectKey) {
    // Load a pre-configured demo project
    console.log(`Loading demo project: ${projectKey}`);
    // Implement the logic to load a specific demo project
    // This might involve populating the UI with pre-set values, loading specific pipelines, etc.
}