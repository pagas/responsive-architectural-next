
import styles from './sectionBottomHeader.module.css'

export default function SectionBottomHeader({
  className = '',
  title,
  subTitle
}: {
  className: string
  title: string
  subTitle: string
}) {

  return (

    <div className={`${styles['section-bottom']} ${className}`} >
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
    </div>
  )
}
