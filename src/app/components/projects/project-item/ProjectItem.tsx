
import styles from './projectItem.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Project } from '@/app/types/Project';

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div className={styles['project-card']}>
      <div className={styles['project-img']}>
        <Image src={`/images/${project.image}`} alt={project.name} width={1920} height={1080} />
      </div>
      <div className={styles['techs']}>
        {project.techs && project.techs.map((tech, index) => <span key={index}>{tech}</span>)}
      </div>
      <h3 className={styles['project-name']}>
        {project.name}
      </h3>
      <p className={styles['project-description']}>
        {project.description}
      </p>
      <button type="button" className={styles['project-btn']}>See Project
        <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
      </button>
    </div >
  )
}
