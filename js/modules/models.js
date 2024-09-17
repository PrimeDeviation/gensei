import { showHelperAnimation, hideHelperAnimation } from './demoHelper.js';

export function initializeModels() {
    function loadModelsContent() {
        const tabContent = document.getElementById('tab-content');
        tabContent.innerHTML = `
            <h2>Models</h2>
            <div id="model-list"></div>
            <button id="add-model">Add New Model</button>
            <div id="model-configuration-form" style="display: none;">
                <!-- Model configuration form will be dynamically generated -->
            </div>
        `;

        const modelConfigForm = document.getElementById('model-configuration-form');
        
        modelConfigForm.addEventListener('mouseover', (event) => {
            if (event.target.classList.contains('config-point')) {
                showHelperAnimation(event.target.dataset.configPoint);
            }
        });

        modelConfigForm.addEventListener('mouseout', (event) => {
            if (event.target.classList.contains('config-point')) {
                hideHelperAnimation();
            }
        });
    }

    document.querySelector('.tab-button[data-tab="models"]').addEventListener('click', loadModelsContent);
}