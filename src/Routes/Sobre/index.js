import React from "react";
import styles from "./Sobre.module.css";
import image from "./perfil.jpg";
import Button from "../../Components/Button";
import Titulo from "../../Components/Titulo";
import ListaComum from "../../Components/ListaComum";
import atendimento from "./Atendimento Presencial.png";

export default function Sobre() {
  const primeiraLista = [
    "Psicóloga clínica há 20 anos - CRP 06/71762;",
    "Especialista em Psicologia Hospitalar;",
    "Especialista em psico-oncologia;",
    "Logoterapeuta;",
    "Consultora de Saúde Ocupacional;",
  ];
  return (
    <>
      <Titulo>Sobre a Psicóloga</Titulo>
      <div className={styles.sobre}>
        <div className={styles.perfil}>
          <div className={styles.fotoNome}>
            <img className={styles.image} src={image} alt="" />
           
            
          </div>

          <div className={styles.lateralInfo}>
            <ListaComum lista={primeiraLista} />
            <Button id={styles.botaoMain}>
              <a href="https://contate.me/kellycabrera">Agende sua consulta</a>
            </Button>
          </div>
        </div>
        <div className={styles.apresentacao}>
          <p className={styles.apresentacaoTexto}>
            Ao longo dos meus 20 anos de experiência, descobri uma paixão:
            Ajudar pessoas a descobrirem o sentido de suas vidas. Acredito que o
            autoconhecimento é a chave para superar desafios, adversidades e
            dificuldades que surgem ao longo da jornada, criando assim uma
            conexão mais profunda consigo mesmo para descobrir sua missão
            pessoal na vida.
          </p>
          <br></br>
          <img
            className={styles.fotoIlustrativa}
            src={atendimento}
            alt="atendimento presencial"
          />
          <h3 className={styles.frase}>
            "Nada proporciona melhor capacidade de superação e resistência aos
            problemas e dificuldades em geral do que a consciência de ter uma
            missão á cumprir na vida."
            <p>
              <strong>Viktor Frankl</strong>
            </p>
          </h3>
        </div>
      </div>
    </>
  );
}
