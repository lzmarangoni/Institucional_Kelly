import React from 'react'
import './Section.css'

export default function Section({id, children, tipo}) {
  return (
    <section className={tipo} id={id}>
        {children}
    </section>
  )
}
