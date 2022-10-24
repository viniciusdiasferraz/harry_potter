import axios from 'axios';
import { useState, useEffect } from 'react';
import HeaderPersonagens from '../../src/components/Headerpersonagens';
import Modalcomponente from '../../src/components/Modalcomponente';
import styles from '../personagens/styles.module.css';




function Personagens() {
  const [resposta, setResposta] = useState()

  useEffect(() => {
    axios.get('https://hp-api.herokuapp.com/api/characters')
      .then(function (response) {
        setResposta(response.data);
      })

  }, [])



  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className={styles.corpo}>
      <div className={styles.topo}></div>
      <div className={styles.cardspersonagens}>
        <HeaderPersonagens />
        <div className={styles.textpersonagens}>
          <img src='./hogwarts_shield 1.png'></img>
          <p>Personagens</p>
          <div className={styles.line}></div>
        </div>

        <div className={styles.containerCards}>

          {
            resposta?.map(item => {
              return (
                <div className={styles.cards}>
                  <button className={styles.openmodal} onClick={() => setModalIsOpen(true)}>
                    <img clasname={styles.image} src={item.image ? item.image : './perfil.jpg'}></img>
                    <p className={styles.text}>{item.name}</p>
                  </button>
                </div>
              )
            })
          }

          {modalIsOpen ? <Modalcomponente /> : null}

        </div>
      </div>
    </div>
  )
}

export default Personagens
