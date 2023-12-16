
import styles from './header.module.css'

export default function Header({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <h1 className={styles['section-heading']}>
      {children}
    </h1>
  )
}
