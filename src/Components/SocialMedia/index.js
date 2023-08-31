import React from 'react'
import styles from './SocialMedia.module.css'

export default function SocialMedia({url, children}) {
  return (
    <a className={styles.link} href={url}>
        {children}
    </a>
  )
}
