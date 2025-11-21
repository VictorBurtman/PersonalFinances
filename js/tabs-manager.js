// tabs-manager.js
// Manages tab switching and dynamic content loading

class TabsManager {
    constructor() {
        this.currentTab = 'budget';
        this.loadedTabs = {
            budget: true // Budget is loaded by default (in main HTML)
        };
    }

    /**
     * Switch to a different tab
     * @param {string} tabName - 'budget' or 'transactions'
     */
    async switchTab(tabName) {
        if (this.currentTab === tabName) return;

        // Update UI immediately
        this.updateTabButtons(tabName);
        
        // Show loading if content not yet loaded
        if (!this.loadedTabs[tabName]) {
            this.showLoading(tabName);
            await this.loadTabContent(tabName);
            this.loadedTabs[tabName] = true;
        }

        // Switch visible content
        this.showTabContent(tabName);
        
        this.currentTab = tabName;

        // Trigger tab-specific initialization
        this.onTabActivated(tabName);
    }

    /**
     * Update active state of tab buttons
     */
    updateTabButtons(activeTab) {
        document.querySelectorAll('.app-tab').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeButton = document.querySelector(`[data-tab="${activeTab}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    /**
     * Show tab content, hide others
     */
    showTabContent(tabName) {
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        const tabContent = document.getElementById(`${tabName}Tab`);
        if (tabContent) {
            tabContent.classList.add('active');
        }
    }

    /**
     * Show loading indicator
     */
    showLoading(tabName) {
        const tabContent = document.getElementById(`${tabName}Tab`);
        if (tabContent) {
            tabContent.innerHTML = `
                <div class="tab-loading">
                    <div class="tab-loading-spinner"></div>
                    <div>Loading ${tabName}...</div>
                </div>
            `;
        }
    }

    /**
     * Load tab content from partial HTML file
     */
    async loadTabContent(tabName) {
        try {
            const response = await fetch(`partials/${tabName}-tab.html`);
            
            if (!response.ok) {
                throw new Error(`Failed to load ${tabName} tab`);
            }
            
            const html = await response.text();
            const tabContent = document.getElementById(`${tabName}Tab`);
            
            if (tabContent) {
                tabContent.innerHTML = html;
            }
            
            console.log(`✓ Loaded ${tabName} tab content`);
        } catch (error) {
            console.error(`Error loading ${tabName} tab:`, error);
            
            const tabContent = document.getElementById(`${tabName}Tab`);
            if (tabContent) {
                tabContent.innerHTML = `
                    <div style="text-align: center; padding: 40px; color: #dc3545;">
                        <div style="font-size: 2em; margin-bottom: 10px;">⚠️</div>
                        <div>Failed to load ${tabName} content</div>
                        <div style="margin-top: 10px; font-size: 0.9em;">
                            ${error.message}
                        </div>
                    </div>
                `;
            }
        }
    }

    /**
     * Called when a tab is activated
     * Override this or extend for tab-specific logic
     */
    onTabActivated(tabName) {
        console.log(`Tab activated: ${tabName}`);
        
        // Trigger custom events
        const event = new CustomEvent('tabActivated', { detail: { tabName } });
        document.dispatchEvent(event);

        // Tab-specific initialization
        if (tabName === 'transactions') {
            // Load transactions if not already loaded
            if (typeof loadTransactions === 'function' && window.currentUser) {
                loadTransactions();
            }
        }
    }

    /**
     * Get current active tab
     */
    getCurrentTab() {
        return this.currentTab;
    }

    /**
     * Preload a tab content without switching to it
     */
    async preloadTab(tabName) {
        if (!this.loadedTabs[tabName]) {
            await this.loadTabContent(tabName);
            this.loadedTabs[tabName] = true;
            console.log(`✓ Preloaded ${tabName} tab`);
        }
    }
}

// Create global instance
const tabsManager = new TabsManager();

// Global function for onclick handlers
function switchTab(tabName) {
    tabsManager.switchTab(tabName);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TabsManager;
}
