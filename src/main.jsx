// main.jsx - suppressWarnings SABSE PEHLE hona chahiye
import './utils/suppressWarnings'  // ← line 1
import { StrictMode } from 'react'
import './utils/suppressWarnings'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)