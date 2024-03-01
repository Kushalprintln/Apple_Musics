import styles from './App.module.css';
import Mainsection from './Mainsection'
import Navbar from './Navbar'
import Musicplayer from "./Musicplayer";
import { useEffect, useState } from 'react';
import NavbarStrip from './NavbarStrip';
import SignUp from './SignUp';
import Authcontext from './AuthContext';

import { ToastContainer, toast } from 'react-toastify';


function App() {

  const [showDetails, setshowDetails] = useState(true);
  const [showside, setshowside] = useState('nav');
  const [singupModal,setsingupModal] = useState(false);
  const [user,setUser] = useState(null);
  const [likedSongs,setLikedSongs] = useState([]);
  console.log(likedSongs);

  // ----------------------RESPONSIVE-------------------------
  function responsive() {
    if (window.innerWidth < 1050) {
      setshowDetails(false);
    } else {
      setshowDetails(true);
    }
    if(window.innerWidth < 875){
      setshowside('strip');
    }
    else{
      setshowside('nav');
    }
  }

  function resizing() {
    window.addEventListener('resize', responsive);
    responsive();
  }
  // ----------------------RESPONSIVE END-------------------------
  // ----------------------CHECK USER LOGIN----------------------
  
  function userCheck(){
    if(localStorage.getItem('user')){
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }

  useEffect(() => {
    resizing();
    userCheck();
  }, [])



  return (
    <Authcontext.Provider value={{
      singupModal:setsingupModal,
      User:[user,setUser],
      LikedSongs:[likedSongs,setLikedSongs]
    }}>
      <ToastContainer />
      <div className={styles.layout}>
        {showside==='nav' && <Navbar />}
        {showside==='strip' && <NavbarStrip/>}
        <Musicplayer showDetails={showDetails} />
        {singupModal && <SignUp close={setsingupModal}/>}
        <Mainsection />
      </div>
    </Authcontext.Provider>
  )
}

export default App;
