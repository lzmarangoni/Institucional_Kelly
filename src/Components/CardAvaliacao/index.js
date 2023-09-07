import React from "react";
import styles from "./CardAvaliacao.module.css";

export default function CardAvaliacao({ data }) {
  return (
    <div className={styles.card}>
      
      <p className={styles.texto}>{data.texto}</p>
      <div className={styles.simbolo}>
        {data.simbolo}
        
      </div>
      <p className={styles.nome}>{data.nome}</p>
    </div>
  );
}
