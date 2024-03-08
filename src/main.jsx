// IMPORTING REACT AND STYLES
import React from 'react'
import './index.css'
// IMPORTING REACT ROUTER DOM
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// IMPRORTING OTHER ELEMENTS 
import App from './App.jsx'
import Home from './HomePage/Home.jsx'
import Browse from './BrowsePage/Browse.jsx'
import Searchpage from './SearchPage/Searchpage.jsx'
import SearchSong from './SearchPage/SearchSong.jsx'
import FavoritePage from './FavouritePage/FavoritePage.jsx'
import Radio from './RadioPage/Radio.jsx'
import SubscribePage from './Subscribe/SubscribePage.jsx'
import Setting from './SettingPage/Setting.jsx'
import Album from './AlbumPage/Album.jsx'
import Artist from './ArtistPage/Artist.jsx'
import Mood from './MoodPage/Mood.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='browse' element={<Browse />} />
        <Route path='search' element={<Searchpage />}>
          <Route path=':searchsong' element={<SearchSong />} />
        </Route>
        <Route path='favorite' element={<FavoritePage />} />
        <Route path='radio' element={<Radio />} />
        <Route path='subscribe' element={<SubscribePage />} />
        <Route path='setting' element={<Setting />} />
        <Route path='album/:albumId' element={<Album />} />
        <Route path='artist/:artistId' element={<Artist />} />
        <Route path='mood/:mood' element={<Mood />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
/*
INDEX OF THE PAGES
1)App: Main component of the page containing context for all other component
2)Home:
3)Browse:
4)Searchpage:
5)SearchSong:
6)FavouritePage:
7)Radio:
8)SubscribePage:
9)Setting:
10)Album:
11)Artist:
12)Mood:
*/

