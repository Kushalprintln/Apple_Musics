import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
      <Route index element={<Home/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
)