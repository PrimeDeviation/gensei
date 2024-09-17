import { initializeTabs } from './modules/tabs.js';
import { initializeSidebar } from './modules/sidebar.js';
import { initializeDarkMode } from './modules/darkMode.js';
import { initializeResizeHandle } from './modules/resizeHandle.js';
import { initializeChatBar } from './modules/chatBar.js';
import { initializeModels } from './modules/models.js';
import { initializeAgents } from './modules/agents.js';
import { initializeTools } from './modules/tools.js';
import { initializeDojo } from './modules/dojo.js';
import { initializeProjects } from './modules/projects.js';
import { initializeDemoHelper, loadDemoProject } from './modules/demoHelper.js';
import { initializeSubscription, checkSubscription } from './modules/subscription.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    initializeSidebar();
    initializeDarkMode();
    initializeResizeHandle();
    initializeChatBar();
    initializeModels();
    initializeAgents();
    initializeTools();
    initializeDojo();
    initializeProjects();
    initializeSubscription();
    const demoHelper = initializeDemoHelper();

    // Check subscription status
    const { isPaid, tokensRemaining } = checkSubscription();
    console.log(`Paid subscription: ${isPaid}, Tokens remaining: ${tokensRemaining}`);

    // Example: Load a demo project when clicking a button
    document.getElementById('load-demo').addEventListener('click', () => loadDemoProject('basic-chatbot'));
});