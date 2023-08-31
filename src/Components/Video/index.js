import React from "react";
import styles from "./Video.module.css";

export default function Video(dados) {
  return (
    <div className={styles.video}>
      <iframe
        src={dados.url}
        className={styles.videoScreen}
        title={dados.titulo}
        width="520"
        height="270"
      ></iframe>
    </div>
  );
}
