import React from "react";
import styles from './styles.module.css'

function Casas() {
  return (
    <div className={styles.corpocasas}>
      <section className={styles.entrecasas}>
        <img clasname={styles.hogwarts} src='./hogwarts_shield 1.png'></img>
        <p>Navegue pelas Casas</p>
        <div className={styles.line}></div>
      </section>

      <section className={styles.casa}>
        <div className={styles.classes}>
          <button class= {styles.button} onClick={()=>window.location.href = '/personagens?casa=gryffindor'}>
            <img src='./grifinoria.png'></img>
          </button>
        </div>
        <div className={styles.classes}>
          <button class= {styles.button} onClick={()=>window.location.href = '/personagens?casa=slytherin'}>
            <img src='./sonserina.png'></img>
          </button>
        </div>
        <div className={styles.classes}>
          <button class= {styles.button} onClick={()=>window.location.href = '/personagens?casa=hufflepuff'}>
            <img src='./lufa-lufa.png'></img>
          </button>
        </div>
        <div className={styles.classes}>
          <button class= {styles.button} onClick={()=>window.location.href = '/personagens?casa=Ravenclaw'}>
            <img src='./corvinal.png'></img>
          </button>
        </div>
      </section>

    </div>
  )
}

export default Casas