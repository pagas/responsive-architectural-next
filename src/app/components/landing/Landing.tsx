import styles from './landing.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Landing() {
    return (
        <section className={styles.landing}>
            <h1 className={styles['section-bg-heading']}>
                Web Developer
            </h1>
            <div className={styles.logo}>
                <span>Web</span>
                <span>Dev</span>
            </div>
            <div className={styles.banner}>
                <div className={styles['section-border']}>

                </div>
                <div className={styles['developer-info']}>
                    <h3 className={styles.greeting}>Hello, <span>my name is</span></h3>
                    <h1 className={styles.name}><span>John</span>Smith</h1>
                    <h3 className={styles.prof}>I am <span>Web Developer</span></h3>
                    <p className={styles.about}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sequi?</p>
                    <div className={styles['social-media']}>
                        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                    </div>
                    <div className={styles.cv}>
                        <button type="button" className={`${styles.btn} ${styles['cv-btn']}`}>Downdload cv</button>
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
