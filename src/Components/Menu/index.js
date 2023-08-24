import React, { useState } from 'react'
import styles from './Menu.module.css'
import { HiMenu } from "react-icons/hi";


export default function Menu({itens}) {
    const [abreFecha, setAbreFecha] = useState(false)
    const trueEfalse = () => {
        setAbreFecha(!abreFecha)
        console.log(abreFecha)
    }
    return (
        <div className={abreFecha? styles.menu : styles.menuOff}> 
        <HiMenu className={styles.menuMobile} size={40} onClick={trueEfalse}></HiMenu> 
        <nav>
        
                {itens.map(item => { return <a onClick={trueEfalse} key={item.id} href={item.id}>{item.nome}</a> })}
        </nav>
        </div>

    )
}
