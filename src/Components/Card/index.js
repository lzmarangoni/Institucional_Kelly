import React from "react";
import styles from "./Card.module.css";

export default function Card({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.simbolo}>
        {data.simbolo}
        <h3 className={styles.titulo}>{data.titulo}</h3>
      </div>
      <p className={styles.texto}>{data.texto}</p>
    </div>
  );
}
