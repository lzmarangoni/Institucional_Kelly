import React from 'react'
import styles from './Texto.module.css'

export default function Texto({children}) {
  return (
    <p className={styles.texto}>
      {children}
    </p>
  )
}
