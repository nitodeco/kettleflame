import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from '@features/layout'
import App from './App.tsx'
import '@styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
)
