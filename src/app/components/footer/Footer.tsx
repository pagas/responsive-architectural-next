
import SocialMedia from '../UI/social-media/SocialMedia'
import styles from './footer.module.css'
// import Header from '../UI/header/Header';
// import SubHeader from '../UI/sub-header/SubHeader';
// import SectionBg from '../UI/section-bg/SectionBg';
// import SectionBorder from '../UI/section-border/SectionBorder';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot, faUser, faEnvelope, faPhone, faAsterisk } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <section className={styles.footer}>

      <SocialMedia className={styles['social-media']} ></SocialMedia>
      <div className={styles.copyright}>
        <p>© Web<span>Dev</span> All Rights Reserved. 2023</p>
      </div>
      <div className={styles.author}>
        <p>Made By <span>Code And Create</span></p>
      </div>
    </section>

  )
}
