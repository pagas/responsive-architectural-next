
import styles from './logo.module.css'

export default function Logo({
  className = '',
  size = 'large'
}: {
  className?: string,
  size?: 'small' | 'large'
}) {

  const sizeStyle = size === 'large' ? '' : styles.small;
  return (
    <div className={`${styles.brand} ${sizeStyle} ${className}`}>
      <div className={styles.logo1}></div>
      <div className={styles.logo2}></div>
      <div className={styles.logo3}></div>
      <span>ARCHITECTURE</span>
    </div>
  )
}
