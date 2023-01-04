import React from "react";
import styles from '../Modalcomponente/styles.module.css'



function Modalcomponente({imagem,nome, casa, especie,datadenasc, genero, patronus, varinha, madeira, nucleo, comprimento, ancestralidade, ator, isOpen, setIsOpen}) {
            return (
                <>
                {isOpen &&
                    <div className={styles.cards}>
                        <div className={styles.buttondiv}>
                        <button className={styles.button}  onClick={() => setIsOpen(false)}>X</button>
                        </div>
                        <div className={styles.imgcard}>
                        <img className={styles.imagem} src={imagem}></img>
                        </div>
                        <div className={styles.descriptioncard}>
                        <div className={styles.descricao}>
                        <p>Nome:<span>{nome}</span></p>
                        <p>Casa: <span>{casa}</span></p>
                        <p>Espécie: <span>{especie}</span></p>
                        <p>Data de Nasc: <span>{datadenasc}</span></p>
                        <p>Gênero: <span>{genero}</span></p>
                        <p>Patronus: <span>{patronus}</span></p>
                        <p>Varinha: <span>{varinha}</span></p>
                        <h1> - Madeira: <span>{madeira}</span></h1>
                        <h1> - Núcleo: <span>{nucleo}</span></h1>
                        <h1> - Comprimento: <span>{comprimento}</span></h1>
                        <p>Ancestralidade: <span>{ancestralidade}</span></p>
                        <p>Ator: <span>{ator}</span></p>
                        </div>
                        </div>
                    </div>
                }
                </>
            )
        }


 


export default Modalcomponente