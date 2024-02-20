import styles from './App.module.css';
import Mainsection from './Mainsection'
import Navbar from './Navbar'
import Musicplayer from "./Musicplayer";
import { useEffect, useState } from 'react';
import NavbarStrip from './NavbarStrip';


function App() {

  const [showDetails, setshowDetails] = useState(true);
  const [showside, setshowside] = useState('nav');

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

  useEffect(() => {
    resizing();
  }, [])
  // ----------------------RESPONSIVE END-------------------------

  return (
    <div className={styles.layout}>
      {showside==='nav' && <Navbar />}
      {showside==='strip' && <NavbarStrip/>}
      <Musicplayer showDetails={showDetails} />
      <Mainsection />
    </div>
  )
}

export default App;
