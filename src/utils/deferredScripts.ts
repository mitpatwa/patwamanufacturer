// Deferred script loading utilities
// This module helps defer non-critical third-party scripts until after page load

/**
 * Load a script after the page becomes idle
 * @param {string} id - Unique identifier for the script
 * @param {Function} callback - Function to execute when idle
 */
export function loadWhenIdle(id, callback) {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            callback();
        }, { timeout: 2000 });
    } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(callback, 1);
    }
}

/**
 * Defer script loading until user interaction
 * @param {string} scriptId - Unique identifier for the script
 * @param {Function} loadScript - Function that loads the script
 */
export function loadOnInteraction(scriptId, loadScript) {
    const events = ['mousedown', 'touchstart', 'keydown', 'scroll'];
    const loadHandler = () => {
        loadScript();
        events.forEach(event => {
            document.removeEventListener(event, loadHandler);
        });
    };

    events.forEach(event => {
        document.addEventListener(event, loadHandler, { once: true, passive: true });
    });

    // Fallback - load after 3 seconds anyway
    setTimeout(loadScript, 3000);
}

/**
 * Load Google Translate when idle
 */
export function initGoogleTranslateDeferred() {
    loadWhenIdle('google-translate', () => {
        if (!window.googleTranslateElementInit) {
            console.warn('Google Translate init function not found');
            return;
        }

        // Check if translate script is already loaded
        if (!window.google || !window.google.translate) {
            const script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        } else {
            window.googleTranslateElementInit();
        }
    });
}

/**
 * Defer analytics initialization
 */
export function initAnalyticsDeferred() {
    loadWhenIdle('analytics', () => {
        // Analytics is already in index.html, this just ensures
        // we're not blocking main thread
        if (window.gtag) {
            console.log('Analytics ready');
        }
    });
}
