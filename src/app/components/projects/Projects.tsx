
import styles from './projects.module.css';
import sharedStyles from '../../styles/shared.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Header from '../UI/header/Header';
import SubHeader from '../UI/sub-header/SubHeader';
import SectionBg from '../UI/section-bg/SectionBg';
import ButtonOutline from '../UI/buttons/ButtonOutline';
import { Project } from '@/app/types/Project';
import ProjectItem from './project-item/ProjectItem';
import SectionBorder from '../UI/section-border/SectionBorder';

export default function Projects() {
  const projects: Project[] = [
    {
      name: 'Contact Form',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptatibus?',
      techs: ['HTML', 'CSS', 'JavaScript'],
      image: 'project1.png'
    },
    {
      name: 'Calculator',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptatibus?',
      techs: ['HTML', 'CSS', 'JavaScript'],
      image: 'project2.png'
    },
    {
      name: 'Menu',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptatibus?',
      techs: ['HTML', 'CSS', 'JavaScript'],
      image: 'project3.png'
    },
    {
      name: 'Website',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptatibus?',
      techs: ['HTML', 'CSS', 'JavaScript'],
      image: 'project4.png'
    },
    {
      name: 'Cpmtact Form',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptatibus?',
      techs: ['HTML', 'CSS', 'JavaScript'],
      image: 'project5.png'
    },
    {
      name: 'Profile Card',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptatibus?',
      techs: ['HTML', 'CSS', 'JavaScript'],
      image: 'project6.png'
    },
  ]
  return (
    <section className={styles.projects}>
      <SectionBg>My Projects</SectionBg>
      <Header>Portfolio</Header>
      <SubHeader left="My" right="Projects"></SubHeader>

      <div className={styles['projects-cards']}>
        {projects.map((project, index) => <ProjectItem project={project} key={index}></ProjectItem>)}

        <ButtonOutline className={styles.btn}>View More</ButtonOutline>
      </div>
      <SectionBorder className={styles['section-border']} />
    </section>
  )
}
