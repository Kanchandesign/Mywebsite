import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// ── Switch which portfolio renders by commenting/uncommenting one line ──
import App from './App'        // current site
// import App from './AppV2'   // experimental site

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
