import React from 'react'
import styles from './Header.module.css'
import Menu from '../Menu'

export default function Header({itens}) {
  return (
    <header className={styles.headerCustom}>
      <h1>Psicologa | Kelly Cabrera</h1>
      <Menu itens={itens}/>
    </header>
  )
}
