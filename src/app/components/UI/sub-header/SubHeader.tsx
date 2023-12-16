
import styles from './subHeader.module.css'

export default function SubHeader({
  left, right
}: {
  left: string,
  right: string
}) {

  return (
    <h3 className={styles['sub-heading']}>{left} <span>{right}</span></h3>
  )
}
