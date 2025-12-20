import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/animations.css' // GPU-optimized animations
import { initGoogleTranslateDeferred } from './utils/deferredScripts'

// Initialize deferred third-party scripts
initGoogleTranslateDeferred();

createRoot(document.getElementById("root")!).render(<App />);
