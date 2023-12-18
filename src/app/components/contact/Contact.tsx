
import styles from './contact.module.css'
import Header from '../UI/header/Header';
import SubHeader from '../UI/sub-header/SubHeader';
import SectionBg from '../UI/section-bg/SectionBg';
import SectionBorder from '../UI/section-bottom-header/SectionBottomHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faUser, faEnvelope, faPhone, faAsterisk } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <SectionBg>Contact Me</SectionBg>
      <Header>Contact</Header>
      <SubHeader left="Let's" right="Have Some Talk"></SubHeader>

      <SectionBorder className={styles['section-border']} />
      <div className={styles['contact-content']}>
        <div className={styles['contact-left']}>
          <div className="address">
            <div className={styles.icon} >
              <FontAwesomeIcon icon={faLocationDot} />
            </div>

            <div className={styles['contact-info']}>
              <span>Address</span>
              <span>New York, USA</span>
            </div>
          </div>

          <div className="freelance">
            <div className={styles.icon} >
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className={styles['contact-info']}>
              <span>Freelance</span>
              <span>Available Right now</span>
            </div>
          </div>

          <div className="freelance">
            <div className={styles.icon} >
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className={styles['contact-info']}>
              <span>Email</span>
              <span>JohnDoe@mail.com</span>
            </div>
          </div>

          <div className="freelance">
            <div className={styles.icon} >
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className={styles['contact-info']}>
              <span>Phone</span>
              <span>+44 151512 5454</span>
            </div>
          </div>


        </div>
        <div className={styles['contact-right']}>
          <form >
            <div className={styles['input-groups']}>
              <div className={styles['input-group']}>
                <label htmlFor="name">
                  Your Full name
                  <FontAwesomeIcon icon={faAsterisk} className={styles.icon} />
                </label>
                <input type="text" />
              </div>

              <div className={styles['input-group']}>
                <label htmlFor="email">
                  Your Email
                  <FontAwesomeIcon icon={faAsterisk} className={styles.icon} />
                </label>
                <input type="email" />
              </div>

            </div>
            <div className={styles['input-group']}>
              <label htmlFor="subject">
                Your Subject
                <FontAwesomeIcon icon={faAsterisk} className={styles.icon} />
              </label>
              <input type="text" />
            </div>
            <div className={styles['input-group']}>
              <label htmlFor="message">
                Your Message
                <FontAwesomeIcon icon={faAsterisk} className={styles.icon} />
              </label>
              <textarea />
            </div>
            <button className={styles['contact-btn']}>Send Message</button>
          </form>
        </div>
      </div>
    </section>

  )
}
