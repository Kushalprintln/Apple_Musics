import styles from './App.module.css';
import Mainsection from './MainSection/Mainsection'
import Navbar from './Navbar/Navbar'
import Musicplayer from "./MusicPlayer/Musicplayer";
import { useEffect, useRef, useState } from 'react';
import NavbarStrip from './Navbar/NavbarStrip';
import SignUp from './Modals/SignUp';
import Authcontext from './Context/AuthContext';

import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [showDetails, setshowDetails] = useState(true);
  const [showside, setshowside] = useState('nav');
  const [singupModal, setsingupModal] = useState(false);
  const [user, setUser] = useState(null);
  const [likedSongs, setLikedSongs] = useState([]);
  const [song, setSong] = useState(null);
  const audioRef = useRef();

  // ----------------------RESPONSIVE-------------------------
  function responsive() {
    if (window.innerWidth < 1050) {
      setshowDetails(false);
    } else {
      setshowDetails(true);
    }
    if (window.innerWidth < 875) {
      setshowside('strip');
    }
    else {
      setshowside('nav');
    }
  }

  function resizing() {
    window.addEventListener('resize', responsive);
    responsive();
  }
  // ----------------------RESPONSIVE END------------------------
  // ----------------------CHECK USER LOGIN----------------------

  function userCheck() {
    if (localStorage.getItem('user')) {
      const User = JSON.parse(localStorage.getItem('user'));
      const token = User.JWT;
      setUser(User);
      gettingLikedSongs(token);
    }
  }

  async function gettingLikedSongs(token) {
    // REQUIREMENT FOR GETTING LIKED SONGS;
    const LikeSongURL = 'https://academics.newtonschool.co/api/v1/music/favorites/like';
    const LikeSongsheader = { 'projectId': 'f104bi07c490', 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };

    const resp = await fetch(LikeSongURL, {
      method: 'GET',
      headers: LikeSongsheader,
    })
    // console.log("Response", resp);
    const songdata = await resp.json();
    // console.log("liked songs", songdata.data.songs);
    if (resp.ok) {
      let songids = [];
      songdata.data.songs.map((ele) => {
        songids.push(ele._id);
      })
      setLikedSongs([...songids])
    }
  }

  useEffect(() => {
    resizing();
    userCheck();
  }, [])



  return (
    <Authcontext.Provider value={{
      singupModal: setsingupModal,
      User: [user, setUser],
      LikedSongs: [likedSongs, setLikedSongs],
      SelectedSong: [song, setSong],
      audref : audioRef
    }}>
      <ToastContainer />
      <div className={styles.layout}>
        {showside === 'nav' && <Navbar />}
        {showside === 'strip' && <NavbarStrip />}
        <Musicplayer showDetails={showDetails} />
        {singupModal && <SignUp close={setsingupModal} />}
        <Mainsection />
      </div>
    </Authcontext.Provider>
  )
}

export default App;
