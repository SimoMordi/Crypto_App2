import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import CryptoProvider from './context/cryptoContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>

      <CryptoProvider>
          <App />
      </CryptoProvider>
      
    </Router>
  </React.StrictMode>,
)
