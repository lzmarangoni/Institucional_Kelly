import React from 'react'
import styles from './Content.module.css'
import image from   './perfil.jpg'

export default function Content() {
  return (
    <div className={styles.content}>
        <img src='' alt=''/>
        <h3 className={styles.title}>Sobre</h3>
        <p className={styles.text}>Psicologa com mais 8 anos de experiência, formada pela universidade xyz é especialista em tais areasas</p>
    </div>
  )
}
