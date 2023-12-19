
import styles from './customers.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import SectionBottomHeader from '../UI/section-bottom-header/SectionBottomHeader';

export default function Customers() {
  return (
    <section className={styles.customers}>
      <div className={styles['customers-heading']}>CUSTOMERS</div>
      <div className={styles['customers-content']}>
        <div className={styles['customers-card']}>
          <div className={styles['customers-card-image-container']}>
            <Image src={`/images/customer1.jpg`} alt="Customer1" width={1920} height={1080} />
          </div>

          <div className={styles['customers-card-content']}>
            <h1>John Smith</h1>
            <h3>Co-manager associated</h3>
            <FontAwesomeIcon icon={faQuoteLeft} className={styles.icon}></FontAwesomeIcon>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, doloribus.</p>
          </div>
        </div>

        <div className={styles['customers-card']}>
          <div className={styles['customers-card-image-container']}>
            <Image src={`/images/customer2.jpg`} alt="Customer2" width={1920} height={1080} />
          </div>
          <div className={styles['customers-card-content']}>
            <h1>John Smith</h1>
            <h3>Co-manager associated</h3>
            <FontAwesomeIcon icon={faQuoteLeft} className={styles.icon}></FontAwesomeIcon>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, doloribus.</p>
          </div>
        </div>

      </div>
      <SectionBottomHeader title='CLIENT' subTitle='SAYS' className={styles['section-bottom']}></SectionBottomHeader>


    </section >
  )
}
