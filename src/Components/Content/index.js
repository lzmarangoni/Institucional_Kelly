import React from 'react'
import styles from './Content.module.css'
import image from   './perfil.jpg'

export default function Content() {
  return (
    <div className={styles.content}>
        <img src={image} alt=''/>
        <h1>Psicologa | Kelly Cabrera</h1>
    </div>
  )
}
