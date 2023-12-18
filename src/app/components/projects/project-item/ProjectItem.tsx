
import styles from './projectItem.module.css';
import Image from 'next/image';
import { Project } from '@/app/types/Project';

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div className={styles.card}>

      <Image src={`/images/${project.image}`} alt={project.title} width={1920} height={1080} />
      <div className={styles['card-content']}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  )
}
