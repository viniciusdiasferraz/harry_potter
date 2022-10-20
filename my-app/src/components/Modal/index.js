import React from "react";
import axios from "axios";
import styles from './styles.module.css';
import { useState, useEffect } from "react";

function Modal  (){
    const [resposta, setResposta] = useState()

    useEffect(() => {
        axios.get('https://hp-api.herokuapp.com/api/characters')
            .then(function (response) {
                setResposta(response.data);
            })
    }, [])


    console.log(resposta, "resposta")

    return (
        
        resposta?.map(item => {
           
            return (
                <div className={styles.modalfundo}>
                    <div className={styles.modalcontainer}>
                        <img src={item.image ? item.image : './perfil.jpg'} ></img>
                        {item.name}
                        {item.house}
                        {item.species}
                        {item.dateOfBirth}
                        {item.gender}
                        {item.patronus}
                        {item.wand}
                        {item.ancestry}
                        {item.actor}
                    </div>
                </div >
            )
        })
    )
}

export default Modal
