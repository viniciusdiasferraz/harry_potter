import React from "react";
import styles from '../Modalcomponente/styles.module.css'



function Modalcomponente({imagem,nome, casa, especie,datadenasc, genero, patronus, varinha, madeira, nucleo, comprimento, ancestralidade, ator }) {
            return (
                    <div className={styles.cards}>
                        <img src={imagem}></img>
                        <p>Nome: {nome}</p>
                        <p>Casa: {casa}</p>
                        <p>Espécie: {especie}</p>
                        <p>Data de Nasc: {datadenasc}</p>
                        <p>Gênero: {genero}</p>
                        <p>Patronus: {patronus}</p>
                        <h1>Varinha: {varinha}</h1>
                        <p> - Madeira: {madeira}</p>
                        <p> - Núcleo: {nucleo}</p>
                        <p> - Comprimento: {comprimento}</p>
                        <p>Ancestralidade: {ancestralidade}</p>
                        <p>Ator: {ator}</p>
                    </div>
            )
        }


 


export default Modalcomponente