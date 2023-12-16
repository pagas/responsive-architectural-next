import styles from './page.module.css'
import Navigation from './components/navigation/Navigation'
import Landing from './components/landing/Landing'
import Skills from './components/skills/Skills'

export default function Home() {
  return (
    <main className={styles.container}>
      <Navigation></Navigation>
      <Landing></Landing>
      <Skills></Skills>



    </main>
  )
}
