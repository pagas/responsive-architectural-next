
import SocialMedia from '../UI/social-media/SocialMedia'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <section className={styles.footer}>

      <SocialMedia className={styles.icons} iconClassName={styles.icon}></SocialMedia>
      <div className={styles.copyright}>
        <p>© Web<span>Dev</span> All Rights Reserved. 2023</p>
      </div>
      <div className={styles.author}>
        <p>Made By <span>Code And Create</span></p>
      </div>
    </section>

  )
}
