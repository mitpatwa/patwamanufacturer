import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/animations.css' // GPU-optimized animations

createRoot(document.getElementById("root")!).render(<App />);
