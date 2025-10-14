import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";

//Importando o AXIOS para enviar as requisições HTTP
import axios from "axios";
import { useState, useEffect } from "react";
// O hook useEffect é executado toda vez ue o componente pe re-renderizado

const HomeContent = () => {
  //Criando um estado para lista de jogos
  const [games, setGames] = useState([]);

  //Criando o bloco do use Effect:

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:4000/games");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGames();
  }, [games]); // Dependencia do useEffect
  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          {/* TITLE */}
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>
          <Loading />
          <div className={styles.games} id={styles.games}>
            {/* Lista de jogos irá aqui */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
