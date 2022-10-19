import React from "react";
import styles from './styles.module.css';


function Navegacao() {
    return (
        <section className={styles.navegacao}>
            <button class= {styles.button} onClick={()=>window.location.href = 'http:/personagens'}> veja todos os personagens</button>
        </section>
    )
}

export default Navegacao

