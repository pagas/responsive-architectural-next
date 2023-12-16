
import styles from './sectionBg.module.css'

export default function SectionBg({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <h1 className={styles['section-bg-heading']}>
      {children}
    </h1>
  )
}
