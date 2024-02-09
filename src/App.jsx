import styles from './App.module.css';
import Mainsection from './Mainsection'
import Navbar from './Navbar'
import Musicplayer from "./Musicplayer";


function App() {
  return (
    <div className={styles.layout}>
      <Navbar/>
      <Musicplayer/>
      <Mainsection/>
    </div>
  )
}

export default App
