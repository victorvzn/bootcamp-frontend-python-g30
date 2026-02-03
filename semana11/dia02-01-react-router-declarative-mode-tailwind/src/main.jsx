import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>React Router - HOME PAGE</h1>} />
      <Route path='/login' element={<h1>React Router - LOGIN PAGE</h1>} />
      <Route path='/register' element={<h1>React Router - REGISTER PAGE</h1>} />
    </Routes>
  </BrowserRouter>,
)
