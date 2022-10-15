import axios from 'axios';
import { useState, useEffect } from 'react';


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
    <div>
      Teste

      {
        resposta.map(item => {

          return (
            <div>
              <p>{item.name}</p>
              <p>{item.species}</p>
              <img src={item.image}></img>

            </div>

          )
        })
      }
    </div>
  )
}

export default Personagens
