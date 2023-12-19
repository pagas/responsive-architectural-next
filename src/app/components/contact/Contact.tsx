
import styles from './contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles['contact-content']}>
        <div className={styles['contact-left']}>
          <h1>Stay tuned and get the latest updates</h1>
        </div>
        <div className={styles['contact-right']}>
          <input type="email" placeholder="Enter your e-mail address" />
          <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />

        </div>
      </div>
    </section>
  )
}
