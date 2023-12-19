
import styles from './projects.module.css';
import { Project } from '@/app/types/Project';
import ProjectItem from './project-item/ProjectItem';
import SectionBottomHeader from '../UI/section-bottom-header/SectionBottomHeader';
import Header from '../UI/header/Header';

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Contact Form',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptatibus?',
      image: 'card1.jpg'
    },
    {
      title: 'Calculator',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptatibus?',
      image: 'card2.jpg'
    },
    {
      title: 'Menu',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptatibus?',
      image: 'card3.jpg'
    },
    {
      title: 'Website',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptatibus?',
      image: 'card4.jpg'
    },
    {
      title: 'Cpmtact Form',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptatibus?',
      image: 'card5.jpg'
    }
  ]
  return (
    <section className={styles.projects}>

      <Header className={styles['section-heading']}>LATEST PROJECTS</Header>
      <div className={styles.cards}>
        {projects.map((project, index) => <ProjectItem project={project} key={index}></ProjectItem>)}
      </div>

      <SectionBottomHeader title='AWESOME' subTitle='DESIGNS' className={styles.designs}></SectionBottomHeader>
    </section>
  )
}
