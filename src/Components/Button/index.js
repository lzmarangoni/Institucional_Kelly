import React from 'react'
import styles from './Button.module.css'

export default function Button({children, id}) {
  return (
    <div>
      <button id={id} className={styles.buttonCustom}>{children} </button>
    </div>
  )
}
