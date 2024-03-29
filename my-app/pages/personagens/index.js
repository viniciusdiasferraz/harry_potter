import axios from "axios";
import { useState, useEffect } from "react";
import HeaderPersonagens from "../../src/components/Headerpersonagens";
import Modalcomponente from "../../src/components/Modalcomponente";
import styles from "../personagens/styles.module.css";
import Pagination from "../../src/components/Pagination";

function Personagens() {
  const [resposta, setResposta] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);
  const [casa, setCasa] = useState()

  const [itensPerPage, setItensPerPage] = useState (30)
  const [currentPage, setCurrentPage] = useState (0)
  
  const pages = Math.ceil(resposta?.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = resposta?.slice(startIndex, endIndex)

  console.log(pages, 'PAGES')
  console.log(startIndex, 'STARTINDEX')
  console.log(endIndex, 'endindex')
  console.log(currentItens)

  const selectCharacter = (item) => {
    setItemSelected(item);
    setModalIsOpen(true);
  };

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setCasa(params.toString().replace('casa=', ''))                 
    }
  }, [])

  const baseURL =  "https://hp-api.onrender.com/api/characters"
  const urlCasa = `https://hp-api.onrender.com/api/characters/house/${casa}`

  useEffect(() => {
    if (casa){
    if(casa === 'todos'){
      axios.get(baseURL).then((response) => {
        setResposta(response.data);
      });
    }
    else{
      axios.get(urlCasa).then((response) => {
        setResposta(response.data);
      });
    }
  }
  }, [casa])

	const closeModal = () => {
    setModalIsOpen(!modalIsOpen)
  }


  const casastxt = () =>{
    switch (casa){
      case "todos":
        return "Personagens";
      case "gryffindor":
        return "Grifinória";
      case "hufflepuff":
        return "Lufa-Lufa";
      case "Ravenclaw":
        return "Corvinal";
      case "slytherin":
        return "Sonserina";

      default:
        "Desconhecido";
    }
  };
    

  return (
    <div className={styles.corpo}>
      <div className={styles.topo}></div>
      <div className={styles.cardspersonagens}>
        <HeaderPersonagens />
        <div className={styles.textpersonagens}>
          <img src="./hogwarts_shield 1.png"></img>
          <p className={styles.p}>{casastxt()}</p>
          <div className={styles.line}></div>
        </div>

        <div className={styles.containerCards}>
          
          {currentItens?.map((item, index) => {
            return (
              <div className={styles.cards} key={index}>
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
                imagem={itemSelected.image ? itemSelected.image : "./imagem.jpg"}
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
      <Pagination pages={pages}  currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default Personagens;
