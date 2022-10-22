import axios from 'axios';
import { useState, useEffect } from 'react';
import HeaderPersonagens from '../../src/components/Headerpersonagens';
import Modalcomponente from '../../src/components/Modalcomponente';
import Card from '../../src/components/Card'
import styles from '../personagens/styles.module.css';



function Personagens() {
  const [resposta, setResposta] = useState()

  useEffect(() => {
    axios.get('https://hp-api.herokuapp.com/api/characters')
      .then(function (response) {
        setResposta(response.data);
      })

  }, [])


  console.log(resposta, "resposta")

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }


  function closeModal() {
    setModalIsOpen(false);
  }

  return (

    <div className={styles.cardspersonagens}>
      <HeaderPersonagens />
      <div className={styles.textpersonagens}>
        <img src='./hogwarts_shield 1.png'></img>
        <p>Personagens</p>
        <div className={styles.line}></div>
      </div>



      {
        resposta?.map(item => {

          return (
            <div className={styles.cards}>
              <button className={styles.openmodal} onClick={openModal}>
                {modalIsOpen && <Modalcomponente/>}
                <img clasname={styles.image} src={item.image ? item.image : './perfil.jpg'}></img>
                <p className={styles.text}>{item.name}</p>
              </button>
            </div>
          )
        })
      }

    </div>
  )
}

export default Personagens
