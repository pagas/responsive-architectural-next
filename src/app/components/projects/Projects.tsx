
import styles from './projects.module.css';
import sharedStyles from '../../styles/shared.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Header from '../UI/header/Header';
import SubHeader from '../UI/sub-header/SubHeader';
import SectionBg from '../UI/section-bg/SectionBg';
import ButtonOutline from '../UI/buttons/ButtonOutline';

export default function Projects() {
  return (
    <section className={styles.projects}>
      <SectionBg>My Projects</SectionBg>
      <Header>Portfolio</Header>
      <SubHeader left="My" right="Projects"></SubHeader>

      <div className={styles['projects-cards']}>
        <div className={styles['project-card']}>
          <div className={styles['project-img']}>
            <Image src="/images/project1.png" alt="Project1" width={1920} height={1080} />
          </div>
          <div className={styles['techs']}>
            <span>HTML, </span>
            <span>CSS, </span>
            <span>JavaScript, </span>
          </div>
          <h3 className={styles['project-name']}>
            Contact Form
          </h3>
          <p className={styles['project-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati nemo nulla sint nisi asperiores.
          </p>
          <button type="button" className={styles['project-btn']}>See Project
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </button>
        </div>
        <div className={styles['project-card']}>
          <div className={styles['project-img']}>
            <Image src="/images/project2.png" alt="Project1" width={1920} height={1080} />
          </div>
          <div className={styles['techs']}>
            <span>HTML, </span>
            <span>CSS, </span>
            <span>JavaScript, </span>
          </div>
          <h3 className={styles['project-name']}>
            Calculator
          </h3>
          <p className={styles['project-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati nemo nulla sint nisi asperiores.
          </p>
          <button type="button" className={styles['project-btn']}>See Project
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </button>
        </div>
        <div className={styles['project-card']}>
          <div className={styles['project-img']}>
            <Image src="/images/project3.png" alt="Project1" width={1920} height={1080} />
          </div>
          <div className={styles['techs']}>
            <span>HTML, </span>
            <span>CSS, </span>
            <span>JavaScript, </span>
          </div>
          <h3 className={styles['project-name']}>
            Website
          </h3>
          <p className={styles['project-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati nemo nulla sint nisi asperiores.
          </p>
          <button type="button" className={styles['project-btn']}>See Project
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </button>
        </div>
        <div className={styles['project-card']}>
          <div className={styles['project-img']}>
            <Image src="/images/project4.png" alt="Project1" width={1920} height={1080} />
          </div>
          <div className={styles['techs']}>
            <span>HTML, </span>
            <span>CSS, </span>
            <span>JavaScript, </span>
          </div>
          <h3 className={styles['project-name']}>
            Menu
          </h3>
          <p className={styles['project-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati nemo nulla sint nisi asperiores.
          </p>
          <button type="button" className={styles['project-btn']}>See Project
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </button>
        </div>
        <div className={styles['project-card']}>
          <div className={styles['project-img']}>
            <Image src="/images/project5.png" alt="Project1" width={1920} height={1080} />
          </div>
          <div className={styles['techs']}>
            <span>HTML, </span>
            <span>CSS, </span>
            <span>JavaScript, </span>
          </div>
          <h3 className={styles['project-name']}>
            Contact Form
          </h3>
          <p className={styles['project-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati nemo nulla sint nisi asperiores.
          </p>
          <button type="button" className={styles['project-btn']}>See Project
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </button>
        </div>
        <div className={styles['project-card']}>
          <div className={styles['project-img']}>
            <Image src="/images/project6.png" alt="Project1" width={1920} height={1080} />
          </div>
          <div className={styles['techs']}>
            <span>HTML, </span>
            <span>CSS, </span>
            <span>JavaScript, </span>
          </div>
          <h3 className={styles['project-name']}>
            Profile Card
          </h3>
          <p className={styles['project-description']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati nemo nulla sint nisi asperiores.
          </p>
          <button type="button" className={styles['project-btn']}>See Project
            <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
          </button>
        </div>
        <ButtonOutline className={styles.btn}>View More</ButtonOutline>
      </div>

      <div className={`${sharedStyles['section-border']} ${styles['section-border']}`}></div>
    </section>
  )
}
