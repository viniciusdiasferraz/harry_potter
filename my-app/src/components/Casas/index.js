import React from "react";
import styles from './styles.module.css'

function Casas() {
  return (
    <div>
      <section className={styles.entrecasas}>
        <img src='./hogwarts_shield 1.png'></img>
        <p>navegue pelas casas</p>
      </section>

      <section className={styles.casa}>
        <img src='./grifinoria.png'></img>
        <img src='./sonserina.png'></img>
        <img src='./lufa-lufa.png'></img>
        <img src='./corvinal.png'></img>
      </section>

    </div>
  )
}

export default Casas