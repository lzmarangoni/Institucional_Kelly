import React, { useState } from "react";
import styles from "./Menu.module.css";
import { HiMenu, HiX } from "react-icons/hi";

export default function Menu({ itens }) {
  const [abreFecha, setAbreFecha] = useState(false);
  const trueEfalse = () => {
    setAbreFecha(!abreFecha);
   
  };
  return (
    <>
      <HiMenu
        className={styles.menuMobile}
        size={50}
        onClick={trueEfalse}
      ></HiMenu>
      <nav className={abreFecha ? styles.menu : styles.menuOff}>
        <HiX
        className={styles.closeMenuMobile}
        size={50}
        onClick={trueEfalse}
        >
        </HiX>
        <ul className={styles.lista}>
          {itens.map((item) => {
            return (
              <li key={item.id} className={styles.itemDaLista}>
                <a onClick={trueEfalse} key={item.id} href={item.id}>
                  {item.nome}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
