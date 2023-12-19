

import styles from './footer.module.css'
import Logo from '../UI/logo/Logo'

export default function Footer() {
  return (
    <section className={styles.footer}>
      <Logo size="small" className={styles['brand-footer']} />


      <div className={styles.copyright}>
        <p>© All Rights Reserved. Made by Code And Create</p>
      </div>

    </section>

  )
}
