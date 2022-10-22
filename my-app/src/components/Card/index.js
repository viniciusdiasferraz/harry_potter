import React from "react";
import styles from './styles.module.css'

const Card = ({card, key}) => {
    return (
        <div>
            <div className={styles.cards}>
            {/* <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel=""
            overlayClassName=""
            className=""
            
            /> */}
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