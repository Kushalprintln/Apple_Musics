import styles from './App.module.css';
import Mainsection from './Mainsection'
import Navbar from './Navbar'
import Musicplayer from "./Musicplayer";
import { useEffect, useState } from 'react';


function App() {

  const [showDetails, setshowDetails] = useState(true);
  const [showside, setshowside] = useState(true);

  // ----------------------RESPONSIVE-------------------------
  function responsive() {
    if (window.innerWidth < 1050) {
      setshowDetails(false);
    } else {
      setshowDetails(true);
    }
    if(window.innerWidth < 875){
      setshowside(false);
    }
    else{
      setshowside(true);
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
      {showside && <Navbar />}
      <Musicplayer showDetails={showDetails} />
      <Mainsection />
    </div>
  )
}

export default App
