
import styles from './navigation.module.css'

export default function Navigation() {
  return (
    <>
      <div className={styles.menuIcon}>
        <div className={`${styles.line} ${styles['line-1']}`}></div>
        <div className={`${styles.line} ${styles['line-2']}`}></div>
      </div>
      <div className={styles.navigation}>
        <div className="section-border"></div>
        <div className={styles.navItems}>
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
    </>
  )
}
