
"use client"
import { useState } from 'react'
import styles from './navigation.module.css'
import sharedStyles from '../../styles/shared.module.css'

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => {
    setShowNav(state => !state)
  }

  return (
    <div className={showNav ? styles['is-opened'] : ''}>
      <div className={styles['menu-icon']} onClick={openNavHandler}>
        <div className={`${styles.line} ${styles['line-1']}`}></div>
        <div className={`${styles.line} ${styles['line-2']}`}></div>
      </div>
      <div className={styles.navigation}>
        <div className={`${sharedStyles['section-border']} ${styles['section-border']}`}></div>
        <div className={styles['nav-items']}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Gallery</a>
          <a href="#">Blog</a>
          <a href="#">Clients</a>
          <a href="#">Pricing</a>
          <a href="#">Contacts</a>
        </div>
      </div>
    </div>
  )
}
