import React from 'react'
import styles from './Header.module.css'
import Menu from '../Menu'
import logo from './logoDraKellyCabrera.jpeg'

export default function Header({itens}) {
  return (
    <header className={styles.headerCustom}>
      <img src={logo} alt='logo Dra Kelly Cabrera'></img>
      <Menu itens={itens}/>
    </header>
  )
}
