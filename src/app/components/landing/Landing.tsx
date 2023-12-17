import styles from './landing.module.css';
import Image from 'next/image';
import SectionBg from '../UI/section-bg/SectionBg';
import ButtonOutline from '../UI/buttons/ButtonOutline';
import SectionBorder from '../UI/section-border/SectionBorder';
import SocialMedia from '../UI/social-media/SocialMedia';

export default function Landing() {
    return (
        <section className={styles.landing}>
            <SectionBg>Web Developer</SectionBg>
            <div className={styles.logo}>
                <span>Web</span>
                <span>Dev</span>
            </div>
            <div className={styles.banner}>
                <SectionBorder className={styles['section-border']} />
                <div className={styles['developer-info']}>
                    <h3 className={styles.greeting}>Hello, <span>my name is</span></h3>
                    <h1 className={styles.name}><span>John</span>Smith</h1>
                    <h3 className={styles.prof}>I am <span>Web Developer</span></h3>
                    <p className={styles.about}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sequi?</p>
                    
                    <SocialMedia className={styles['social-media']}></SocialMedia>
                    <div className={styles.cv}>
                        <ButtonOutline className={styles['cv-btn']}>Downdload cv</ButtonOutline>
                        <span>My Skills</span>
                    </div>
                </div>
                <div className={styles['developer-img']}>
                    <div className={styles['dev-img-wrapper']}>
                        <Image src="/images/developer.png" alt="developer" width={1000} height={972} />
                    </div>
                    <div className={`${styles['dev-experience']} ${styles['dev-work']}`}>
                        <span>15</span>
                        <span>years of experience</span>
                    </div>
                    <div className={`${styles['dev-projects']} ${styles['dev-work']}`}>
                        <span>400+</span>
                        <span>completed projects</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
