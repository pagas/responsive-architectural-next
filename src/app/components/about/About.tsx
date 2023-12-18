
import styles from './about.module.css'
import Header from '../UI/header/Header';
import SubHeader from '../UI/sub-header/SubHeader';
import SectionBg from '../UI/section-bg/SectionBg';
import SectionBorder from '../UI/section-border/SectionBorder';
import Image from 'next/image';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles['about-left']}>
        <h1>WE ARE CREATING BUILDING DESIGN</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, asperiores!</p>
        <button>READ MORE</button>
      </div>
      <div className={styles['about-right']}>
        <div className={styles.frame}></div>
        <div className={styles['about-img-wrapper']}>
          <Image src="/images/about.jpg" alt="About" width={5184} height={3456} />
        </div>
        <div className={`${styles.experience} ${styles['section-bottom']}`}>
          <h1>20 YEARS</h1>
          <h3>EXPERIENCE WORK</h3>
        </div>
      </div>
    </section>
  )
}
