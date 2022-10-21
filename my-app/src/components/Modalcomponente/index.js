import React from "react";
import axios from "axios";
import styles from './styles.module.css';
import { useState, useEffect } from "react";
import Modal from 'react-modal'

function Modalcomponente (name,house,species,dateOfBirth,gender,patronus,wand,ancestry,actor){
    return(
        <div className={styles.Modalcomponente}>
            <button> X </button>
            <div>
                {/* <p>{name}</p>
                <p>{house}</p>
                <p>{species}</p>
                <p>{dateOfBirth}</p>
                <p>{gender}</p>
                <p>{patronus}</p>
                <p>{wand.wood}</p>
                <p>{wand.core}</p>
                <p>{wand.length}</p>
                <p>{ancestry}</p> */}
                <p>{item.actor}</p>
            </div>
        </div>
    )
}

export default Modalcomponente
