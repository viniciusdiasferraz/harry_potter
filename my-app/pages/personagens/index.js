import axios from 'axios';
import { useState, useEffect } from 'react';
import HeaderPersonagens from '../../src/components/Headerpersonagens';
import styles from '../personagens/styles.module.css'

function Personagens() {
  const [resposta, setResposta] = useState()

  useEffect(() => {
    axios.get('https://hp-api.herokuapp.com/api/characters')
      .then(function (response) {
        setResposta(response.data);
      })
  }, [])

  console.log(resposta, "resposta")

  return (
  
    <div className={styles.cardspersonagens}>
      <HeaderPersonagens/>
    <div className={styles.textpersonagens}>
      <img src='./hogwarts_shield 1.png'></img>
      <h1>Personagens</h1>

    </div>

      {
        resposta?.map(item => {

          return (     
              <div className={styles.cards}>
                <img clasname={styles.image} src={item.image}></img>
                <p className={styles.text}>{item.name}</p>
              </div>
          )
        })
      }
    </div>
  )
}

export default Personagens
