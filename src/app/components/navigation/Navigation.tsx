
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
    <nav className={styles.navbar}>
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
      <div className="hamburger-menu">
        <div className="menu-icon">
          <div className={styles['line-1']}></div>
          <div className={styles['line-2']}></div>
          <div className={styles['line-3']}></div>
        </div>
        <div className="navigation">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">PROJECTS</a>
          <a href="#">BLOG</a>
          <a href="#">CUSTOMERS</a>
          <a href="#">CONTACT</a>
        </div>
      </div>

    </nav>
    // <div className={showNav ? styles['is-opened'] : ''}>
    //   <div className={styles['menu-icon']} onClick={openNavHandler}>
    //     <div className={`${styles.line} ${styles['line-1']}`}></div>
    //     <div className={`${styles.line} ${styles['line-2']}`}></div>
    //   </div>
    //   <div className={styles.navigation}>
    //     <SectionBorder className={styles['section-border']} />
    //     <div className={styles['nav-items']}>
    //       <a href="#">Home</a>
    //       <a href="#">About</a>
    //       <a href="#">Projects</a>
    //       <a href="#">Gallery</a>
    //       <a href="#">Blog</a>
    //       <a href="#">Clients</a>
    //       <a href="#">Pricing</a>
    //       <a href="#">Contacts</a>
    //     </div>
    //   </div>
    // </div>
  )
}
