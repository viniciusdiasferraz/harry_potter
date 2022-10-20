import React from "react";
import styles from './styles.module.css'

function Casas() {
  return (
    <div className={styles.corpocasas}>
      <section className={styles.entrecasas}>
        <img src='./hogwarts_shield 1.png'></img>
        <p>navegue pelas casas</p>
        <div className={styles.line}></div>
      </section>

      <section className={styles.casa}>
        <div className={styles.classes}>
          <img src='./grifinoria.png'></img>
        </div>
        <div className={styles.classes}>
          <img src='./sonserina.png'></img>
        </div>
        <div className={styles.classes}>
          <img src='./lufa-lufa.png'></img>
        </div>
        <div className={styles.classes}>
          <img src='./corvinal.png'></img>
        </div>
      </section>

    </div>
  )
}

export default Casas