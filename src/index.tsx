import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import App from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <header>header</header>
    <App />
    <footer>footer</footer>
  </React.StrictMode>
)
