import React from 'react'
import styles from './Titulo.module.css'

export default function Titulo({children}) {
  return (
    <div className={styles.caixaTitle}>
        <h3 className={styles.title}>{children}</h3>
    </div>
  )
}
