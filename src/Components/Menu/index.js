import React from 'react'
import styles from './Menu.module.css'

export default function Menu({itens}) {
    return (
        <nav className={styles.menu}>
                {itens.map(item => { return <a key={item.id} href={item.id}>{item.nome}</a> })}
        </nav>
    )
}
