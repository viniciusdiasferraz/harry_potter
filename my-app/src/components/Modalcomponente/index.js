import React from "react";
import styles from '../Modalcomponente/styles.module.css'


function Modalcomponente(image, name, house, dateOfBirth, gender, patronus, wand, wood, core, length, ancestry, actor) {
    return (
        <div>
            <img width={'256px'} height={'356px'} src={item.image} />
            <p>Nome:{item.name}</p>
            <p>Casa:{item.house}</p>
            <p>Data de Nasc:{item.dateOfBirth}</p>
            <p>Gênero:{item.gender}</p>
            <p>Patronus:{item.patronus}</p>
            <p>varinha:</p>
            <div>
                <p>- Madeira{item.wand.wood}</p>
                <p>- Núcleo{item.wand.core}</p>
                <p>- Comprimnto{item.wand.length}</p>
            </div>
            <p>Ancestralidade:{item.ancestry}</p>
            <p>Ator:{item.actor}</p>
            <button onClick={handleClose}>X</button>
        </div>
    )
}

export default Modalcomponente