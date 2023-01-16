import React from "react";
import styles from './styles.module.css'

const Card = ({card, key}) => {
    return (
        <div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    {card.image != "" &&
                        <div>
                            <img src={card.image}></img>
                            <p >{card.name}</p>
                        </div>
                    }
                  
                </div>
            </div>
        </div>
    )
}

export default Card