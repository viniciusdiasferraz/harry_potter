import styles from '../styles/Home.module.css'
import Casas from '../src/components/Casas';
import Header from '../src/components/Header';
import Navegacao from '../src/Navegacao';
import Corpo from '../src/components/Corpo';


function Home() {

  return (
    <div className={styles.fundo}>
        <Header/>
        <Corpo/>
        <Navegacao/>
        <Casas/>
    </div>
  )
}

export default Home