import React from 'react'
import styles from './Section.module.css'

export default function Section({children, id}) {
  return (
    <section className={styles.sectionCustom} id={id}>
        {children}
    </section>
  )
}
