import React from "react";
import styles from "./Sobre2.module.css";

export default function Sobre2() {
  return (
    <div className={styles.comoFunciona}>
      <h2 className={styles.subtitulo}>Como Funciona meu Trabalho?</h2>
      <div className={styles.conteudo}>
        <p>
          Olá, seja bem vindo! Sou a Kelly Cabrera, Psicóloga clínica e estou
          aqui para caminhar junto com você em <strong>busca de equilíbrio emocional e
          autoconhecimento</strong>. Meu objetivo é oferer um <strong>ambiente acolhedor e
          seguro</strong>, onde possamos juntos olhar com cuidados para as suas emoções,
          desafios e sonhos, trabalhando para <strong>alcançar saúde emocional e
          desenvolvimento pessoal</strong>. Acredito na psicoterapia como uma ferramenta
          de transformação. Possuo experiência em: Relacionamentos, Transtornos
          de Ansiedade, Depressão, Síndrome do pânico, Acompanhamento
          Psico-oncológico e luto. Aqui você encontrará um <strong>espaço livre de
          julgamentos, confidencialidade e confiança </strong>, cuidando de suas questões
          mais profundas para ressignificar sua vida tornando cheia de sentido.
        </p>
        <h3 className={styles.frase}>
          "Quando a situação for boa, desfrute-a,
          <br/>
          Quando a situação for ruim, transforme-a,
         <br/>
          Quando a situação não puder ser transformada, transforme-se"
          <br></br>
          <p>
            <strong>Viktor Frankl</strong>
          </p>
        </h3>
      </div>
    </div>
  );
}
