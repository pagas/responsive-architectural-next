import styles from './page.module.css'
import Navigation from './components/navigation/Navigation'
import Landing from './components/landing/Landing'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import About from './components/about/About'

export default function Home() {
  return (
    <main className={styles.container}>
      <Navigation></Navigation>
      <Landing></Landing>
      <About></About>
     {/* <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer> */}



    </main>
  )
}
