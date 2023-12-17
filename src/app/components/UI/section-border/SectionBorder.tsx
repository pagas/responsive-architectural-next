
import styles from './sectionBorder.module.css'

export default function SectionBorder({ className = '' }: { className: string }) {

  return (
    <div className={`${styles['section-border']} ${className}`}></div>
  )
}
