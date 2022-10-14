import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useState, useEffect } from 'react';


 function Home() {
  const [resposta, setResposta] = useState()

  useEffect(()=>{
    axios.get('https://hp-api.herokuapp.com/api/characters') 
    .then(function (response){
      setResposta(response.data);
    })
  },[])

  return (
    <div>
      Teste
      {resposta.name}

    </div>
  )
}

export default Home
