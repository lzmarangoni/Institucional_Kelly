import React from "react";
import styles from "./Sobre.module.css";
import image from "./perfil.jpg";
import Button from "../../Components/Button";
import Titulo from "../../Components/Titulo";

export default function Sobre() {
  return (
    <>
      <Titulo>Sobre a Psicóloga</Titulo>
      <div className={styles.info}>
        <img className={styles.image} src={image} alt="" />
        <div className={styles.lateralInfo}>
          <ul className={styles.lista}>
            <li>Psicóloga clínica há 20 anos - CRP 06/71762;</li>
            <li>Especialista em Psicologia Hospitalar;</li>
            <li>Especialista em psico-oncologia;</li>
            <li>Logoterapeuta;</li>
            <li>Consultora de Saúde Ocupacional;</li>
          </ul>

          <p className={styles.textstyle} style={{ fontWeight: "700" }}>
            {" "}
            Atendimento de adolescentes e adultos.
          </p>
          <br></br>
          <p>
            Ao longo dos meus 20 anos de experiência, descobri uma paixão:
            Ajudar pessoas a descobrirem o sentido de suas vidas. Acredito que o
            autoconhecimento é a chave para superar desafios, adversidades e
            dificuldades que surgem ao longo da jornada, criando assim uma
            conexão mais profunda consigo mesmo para descobrir sua missão
            pessoal na vida.{" "}
          </p>
          <br></br>
          <h3 className={styles.frase}>
            "Nada proporciona melhor capacidade de superação e resistência aos
            problemas e dificuldades em geral do que a consciência de ter uma
            missão á cumprir na vida"{" "}
          </h3>

          <p className={styles.textstyle}>Viktor Frankl</p>

          {/*<Button id={styles.botaoMain}>Agende sua consulta</Button>*/}
        </div>
      </div>
      <div className={styles.comoFunciona}>
        <h2>Como Funciona meu Trabalho</h2>
        <p>Olá, seja bem vindo!</p>
        <p>
          Sou a Kelly Cabrera, Psicóloga clínica e estou aqui para caminhar
          junto com você em busca de equilíbrio emocional e autoconhecimento. Meu
          objetivo é oferer um ambiente acolhedor e seguro, onde possamos juntos
          olhar com cuidados para as suas emoções, desafios e sonhos, trabalhando para alcançar saúde emocional
          e desenvolvimento pessoal. 
          Acredito na psicoterapia como uma ferramenta de transformação, tenho experiência em: Relacionamentos, Transtornos de Ansiedade, Depressão, 
          Síndrome do pânico, Acompanhamento Psico-oncológico e luto. 
          Aqui você encontrará um espaço livre de julgamentos, confidencialidade e confiança, cuidando de suas questões mais profundas 
          para ressignificar sua vida tornando cheia de sentido. 
        </p>
        <h3 className={styles.frase}>
          "Quando a situação for boa, desfrute-a,
          <br></br>
          Quando a situação for ruim, transforme-a, 
          <br></br>
          Quando a situação não puder ser transformada, transforme-se"
        </h3>
      </div>
    </>
  );
}
