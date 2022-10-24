import React from "react";
import styles from '../Modalcomponente/styles.module.css'
import { useState, useEffect } from "react"
import axios from "axios";



function Modalcomponente() {
    const [resposta, setResposta] = useState()

    useEffect(() => {
        axios.get('https://hp-api.herokuapp.com/api/characters')
            .then(function (response) {
                setResposta(response.data);
            })

    }, [])

    return (

        resposta?.map(item => {
            return (
                    <div className={styles.cards}>
                        <img src={item.image ? item.image : './perfil.jpg'}></img>
                        <p>Nome: {item.name}</p>
                        <p>Casa: {item.house}</p>
                        <p>Espécie: {item.species}</p>
                        <p>Data de Nasc: {item.dateOfBirth}</p>
                        <p>Gênero: {item.gender}</p>
                        <p>Patronus: {item.patronus}</p>
                        <p>Varinha:</p>
                        <h1> - Madeira: {item.wand.wood}</h1>
                        <h2> - Núcleo: {item.wand.core}</h2>
                        <h3> - Comprimento: {item.wand.length}</h3>
                        <p>Ancestralidade: {item.ancestry}</p>
                        <p>Ator: {item.actor}</p>
                    </div>
            )
        })


    )
}

export default Modalcomponente