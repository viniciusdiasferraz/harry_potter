import styles from '../styles/Home.module.css'
import Casas from '../src/components/Casas';
import Header from '../src/components/Header';
import Navegacao from '../src/components/Navegacao';
import Corpo from '../src/components/Corpo';


function Home() {

  return (
    <div className={styles.headerhome}>
      <div className={styles.corpo}></div>
      <div className={styles.fundo}>
        <Header />
        <Corpo />
        <Navegacao />
        <Casas />
      </div>
    </div>
  )
}

export default Home