import React from "react";
import styles from "./Sobre.module.css";
import image from "./perfil.jpg";
import Button from "../Button";
import Titulo from "../Titulo";

export default function Sobre() {
  return (
    <div className={styles.content}>
      <Titulo>Sobre</Titulo>
      <div className={styles.info}>
        <img className={styles.image} src={image} alt="" />
        <p className={styles.text}>
          Psicóloga clínica, experiência de 20 anos, graduada em Psicologia,
          Especialista em Psicologia Hospitalar, (Hospital Sta paula-UniSP)
          Especialista em psico-oncologia, Lgoterapeuta. Atendimento de
          adolescentes e adultos de atuo como Consultora de Saúde Ocupacional
        </p>
        <Button id={styles.botaoMain}>Agende sua consulta</Button>
      </div>
      
    </div>
  );
}
