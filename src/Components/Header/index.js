import React from 'react'
import styles from './Header.module.css'

export default function Header({itens}) {
  return (
    <header className={styles.headerCustom}>
      <h1>Kelly Cabrera</h1>
      <nav className={styles.menu}>
        <ul>
          {itens.map(item => { return <li><a href={item.id}>{item.nome}</a></li>})}
        </ul>
      </nav>
    </header>
  )
}
