
"use client"
import { useState } from 'react'
import styles from './navigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function Navigation() {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => {
    setShowNav(state => !state)
  }

  return (
    <nav className={`${styles.navbar} ${showNav ? styles['is-opened'] : ''}`} >
      <div className={`${styles.brand} ${styles['brand-navbar']}`}>
        <div className={styles.logo1}></div>
        <div className={styles.logo2}></div>
        <div className={styles.logo3}></div>
        <span>ARCHITECTURE</span>

      </div>
      <div className={styles['search-bar']}>
        <input type="text" placeholder='What are you looking for?' />
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}></FontAwesomeIcon>
      </div>
      <div className={styles['hamburger-menu']}>
        <div className={styles['menu-icon']} onClick={openNavHandler}>
          <div className={`${styles.line} ${styles['line-1']}`}></div>
          <div className={`${styles.line} ${styles['line-2']}`}></div>
          <div className={`${styles.line} ${styles['line-3']}`}></div>
        </div>
        <div className={styles.navigation}>
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">PROJECTS</a>
          <a href="#">BLOG</a>
          <a href="#">CUSTOMERS</a>
          <a href="#">CONTACT</a>
        </div>
      </div>

    </nav>
  )
}
