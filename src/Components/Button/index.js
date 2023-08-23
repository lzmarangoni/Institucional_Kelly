import React from 'react'
import styles from './Button.module.css'

export default function Button({children}) {
  return (
    <div>
      <button className={styles.buttonCustom}>{children} </button>
    </div>
  )
}
