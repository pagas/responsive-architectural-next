import styles from './landing.module.css';
import Image from 'next/image';

export default function Landing() {
    return (
        <section className={styles.landing}>
            <div className={styles['landing-img']}>
                <Image src="/images/landing-bg.jpg" alt="Landing background" width={2000} height={1335} />
            </div>
            <div className={styles.banner}>
                <h1 className={styles['banner-heading']}>
                    <span>DREAM</span> HOUSE
                </h1>
                <div className={styles['banner-content']}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ipsum.</p>
                    <button>READ MORE</button>
                </div>
            </div>
        </section>
    )
}
