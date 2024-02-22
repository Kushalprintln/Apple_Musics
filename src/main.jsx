import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home.jsx'
import Browse from './Browse.jsx'
import Radio from './Radio.jsx'
import Album from './Album.jsx'
import Artist from './Artist.jsx'
import Searchpage from './SearchPage.jsx'
import Mood from './Mood.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
      <Route index element={<Home/>}/>
      <Route path='browse' element={<Browse/>}/>
      <Route path='radio' element={<Radio/>}/>
      <Route path='album/:albumId' element={<Album/>}/>
      <Route path='artist/:artistId' element={<Artist/>}/>
      <Route path='mood/:mood' element={<Mood/>}/>
      <Route path='search' element={<Searchpage/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
)