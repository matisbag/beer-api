import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './components/App'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <footer>footer</footer>
  </React.StrictMode>
)
