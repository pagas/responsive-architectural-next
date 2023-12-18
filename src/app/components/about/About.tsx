
import styles from './about.module.css'
import Header from '../UI/header/Header';
import Image from 'next/image';
import ButtonOutline from '../UI/buttons/ButtonOutline';
import SectionBottomHeader from '../UI/section-bottom-header/SectionBottomHeader';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles['about-left']}>
        <h1>WE ARE CREATING BUILDING DESIGN</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, asperiores!</p>
        <ButtonOutline color='yellow' className={styles.button}>READ ME</ButtonOutline>
      </div>
      <div className={styles['about-right']}>
        <div className={styles.frame}></div>
        <div className={styles['about-img-wrapper']}>
          <Image src="/images/about.jpg" alt="About" width={5184} height={3456} />
        </div>

        <SectionBottomHeader title='20 YEARS' subTitle='EXPERIENCE WORK' className={styles['section-bottom']}></SectionBottomHeader>
      </div>
    </section>
  )
}
