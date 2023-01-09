import React from "react";
import styles from './styles.module.css';
import Router from "next/router";


function Navegacao() {
    return (
        <section className={styles.navegacao}>
            <button class= {styles.button} onClick={()=>Router.push("/personagens?casa=todos")}> veja todos os personagens</button>
        </section>
    )
}

export default Navegacao

