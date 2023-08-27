import React from "react";
import styles from "./Main.module.css";
import Card from "../Card";
import atdOnline from "./Atendimento Online.png";
import atdPresencial from "./Atendimento Presencial.png";
import Titulo from '../Titulo'

export default function Main() {
  return (
    <div className={styles.container}>
    <Titulo>Terapia e movimento</Titulo>
    <div className={styles.main}>
      
      <div className={styles.conteudo}>
        
        <p className={styles.text}>

          Quero compartilhar com vocês desse movimento de transformação que a
          terapia gera na gente. Como diz a primeira lei de Newton: 
          <p className={styles.text}>
          "um corpo em movimento, tende a permanecer em movimento"
          </p>
        
          <p className={styles.text}>
          Sim isso é física, mas tambem tem muito a ver com a frase que falei anteriormente. 
          </p>
          A terapia gera um movimento, o movimento de sair de si, de sair do ponto A para
          o ponto B, porém quando chegamos ao ponto B percebemos que o percurso
          ainda não acabou, e isso tende a nos fazer permanecer em movimento.
          Mas um movimento de transformação diária, de autoconhecimento, e
          desenvolvimento interpessoal. 
        </p>
        </div>
        <div className={styles.cards}>
        
          <Card titulo="Atendimento 100% Online" imagem={atdOnline} texto=""></Card>
        </div>
      
    </div>
    </div>
    
  );
}
