import React, { useState } from "react";
import styles from "./ItemLista.module.css";
import { HiOutlinePlus } from "react-icons/hi";

export default function ItemLista({ pergunta, resposta }) {
  const [abreFecha, setAbreFecha] = useState(false);
  const openAnswer = () => {
    setAbreFecha(!abreFecha);
    console.log(abreFecha);
  };

  return (
    <div className={styles.itemLista}>
      <div className={styles.pergHeader}>
        <HiOutlinePlus
          size={50}
          className={abreFecha ? styles.close : styles.open}
          onClick={openAnswer}
        ></HiOutlinePlus>
        <h3>{pergunta}</h3>
      </div>

      <div className={abreFecha ? styles.show : styles.showOff}>
        {abreFecha && <p className={styles.resposta}>{resposta}</p>}{" "}
      </div>
    </div>
  );
}
