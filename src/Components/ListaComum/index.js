import React from "react";
import styles from "./ListaComum.module.css";

export default function ListaComum({lista}) {
  return (
    <ul className={styles.listaComum}>
        {lista.map((item)=> <li key={item} className={styles.item}>{item}</li>)}
    </ul>
  );
}
