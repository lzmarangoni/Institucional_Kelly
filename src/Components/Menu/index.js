import React, { useState } from 'react'
import styles from './Menu.module.css'
import { HiMenu } from "react-icons/hi";


export default function Menu({itens}) {
    const [abreFecha, setAbreFecha] = useState(true)
    const trueEfalse = () => {
        setAbreFecha(!abreFecha)
        console.log(abreFecha)
    }
    return (
        <> 
         <HiMenu className={styles.menuMobile} size={50} onClick={trueEfalse}></HiMenu> 
        <nav className={abreFecha? styles.menu : styles.menuOff}>
        
                {itens.map(item => { return <a onClick={trueEfalse} key={item.id} href={item.id}>{item.nome}</a> })}
        </nav>
        </>

    )
}
