import React from "react";
import { useEffect, useState } from "react"
import axios from "axios";
import HeaderPersonagens from "../../src/components/Headerpersonagens";
import styles from '../cornival/styles.module.css'


function Cornival() {
    const [resposta, setResposta] = useState()

    useEffect(() => {
        axios.get('https://hp-api.onrender.com/api/characters/house/Ravenclaw')
            .then(function (response) {
                setResposta(response.data);
            })

    }, [])



    return (
        <div className={styles.corpo}>
            <div className={styles.topo}></div>
            <div className={styles.cardspersonagens}>
                <HeaderPersonagens />
                <div className={styles.textpersonagens}>
                    <img src='./hogwarts_shield 1.png'></img>
                    <p>corvinal</p>
                    <div className={styles.line}></div>
                </div>


                {
                    resposta?.map(item => {
                        return (
                            <div className={styles.cards}>
                                <img clasname={styles.image} src={item.image ? item.image : './perfil.jpg'}></img>
                                <p className={styles.text}>{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



export default Cornival