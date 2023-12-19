
import styles from './header.module.css'

export default function Header({
  children,
  className = '',
}: {
  children: React.ReactNode,
  className?: string
}) {

  return (
    <h1 className={`${styles['section-heading']} ${className}`}>
      {children}
    </h1>
  )
}
