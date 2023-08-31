import React from 'react'
import styles from './Contato.module.css'
import Titulo from '../../Components/Titulo'
import Button from '../../Components/Button'

export default function Contato() {
  return (
    <div className={styles.contato}>
        <Titulo>Contato</Titulo>
        <div className={styles.content}>
        <h3 className={styles.subtitulo}>Agende agora sua consulta de forma rápida, clicando no botão abaixo</h3>
        <Button>Agendar Consulta Online</Button>
        </div>
        
    </div>
  )
}
