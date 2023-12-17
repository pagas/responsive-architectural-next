
import styles from './socialMedia.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
export default function SocialMedia({
  iconClassName = '',
  className = ''
}: {
  iconClassName: string,
  className: string
}) {

  return (
    <div className={`${styles['social-media']} ${className}`}>
      <FontAwesomeIcon icon={faFacebook} className={`${styles.icon} ${iconClassName}`} />
      <FontAwesomeIcon icon={faInstagram} className={`${styles.icon} ${iconClassName}`} />
      <FontAwesomeIcon icon={faTwitter} className={`${styles.icon} ${iconClassName}`} />
    </div>
  )
}
