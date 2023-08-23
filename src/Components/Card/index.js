import React from 'react'
import styles from './Card.module.css'

export default function Card({imagem, titulo, texto}) {
  return (
    <div className={styles.card}>
        <img className={styles.image} src={imagem} alt=''/>
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.texto}>{texto}</p>
    </div>
  )
}
