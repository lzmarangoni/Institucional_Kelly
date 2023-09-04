import React from 'react'
import styles from './Subtitulo.module.css'

export default function Subtitulo({children}) {
  return (
    <h3 className={styles.subtitulo}>
        {children}
    </h3>
  )
}
