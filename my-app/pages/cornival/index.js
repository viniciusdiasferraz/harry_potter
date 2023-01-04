import React from "react";
import { useEffect, useState } from "react"
import axios from "axios";
import HeaderPersonagens from "../../src/components/Headerpersonagens";
import styles from '../cornival/styles.module.css'
import Modalcomponente from "../../src/components/Modalcomponente";


function Cornival() {
    const [resposta, setResposta] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [itemSelected, setItemSelected] = useState(null);
    const selectCharacter = (item) => {
      setItemSelected(item);
      setModalIsOpen(true);
    };
  
    const selectPerson = () => {
      axios.get('https://hp-api.onrender.com/api/characters/house/Ravenclaw').then((response) => {
        setResposta(response.data);
      });
    };
  
    useEffect(() => {
      selectPerson();
    }, []);
  
  
      const closeModal = () => {
      setModalIsOpen(!modalIsOpen)
    }



    return (
        <div className={styles.corpo}>
          <div className={styles.topo}></div>
          <div className={styles.cardspersonagens}>
            <HeaderPersonagens />
            <div className={styles.textpersonagens}>
              <img src="./hogwarts_shield 1.png"></img>
              <p className={styles.p}>Cornival</p>
              <div className={styles.line}></div>
            </div>
    
            <div className={styles.containerCards}>
              {resposta?.map((item) => {
                return (
                  <div className={styles.cards}>
                    <button
                      className={styles.openmodal}
                      onClick={() => selectCharacter(item)}
                    >
                      <img
                        clasname={styles.image}
                        src={item.image ? item.image : "./imagem.jpg"}
                      ></img>
                      <p className={styles.text}>{item.name}</p>
                    </button>
                  </div>
                );
              })}
    
              <div className={styles.modal}>
                {resposta && modalIsOpen && (
                  <>
                    <div
                      onClick={() => closeModal()}
                      className={styles.close}
                    ></div>
                    <Modalcomponente
                    imagem={itemSelected.image}
                      nome={itemSelected.name}
                      casa={itemSelected.house}
                      especie={itemSelected.species}
                      datadenasc={itemSelected.dateOfBirth}
                      genero={itemSelected.gender}
                      patronus={itemSelected.patronus}
                      madeira={itemSelected.wand.wood}
                      nucleo={itemSelected.wand.core}
                      comprimento={itemSelected.wand.length}
                      ancestralidade={itemSelected.ancestry}
                      ator={itemSelected.actor}
                      isOpen={modalIsOpen}
                      setIsOpen={setModalIsOpen}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }




export default Cornival