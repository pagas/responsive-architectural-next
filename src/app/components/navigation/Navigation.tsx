
"use client"
import { useState } from 'react'
import styles from './navigation.module.css'
import SectionBorder from '../UI/section-border/SectionBorder';

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
        <SectionBorder className={styles['section-border']} />
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
