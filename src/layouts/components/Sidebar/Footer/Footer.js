import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDungeon } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        <FontAwesomeIcon icon={faDungeon} className={cx('icon')} />
        <span className={cx('title')}>Create effects</span>
      </div>
      <div className={cx('paragraph')}>
        <span>About</span>
        <span>Newsroom</span>
        <span>Contact</span>
        <span>Careers</span>
      </div>
      <div className={cx('paragraph')}>
        <span>TikTok for Good</span>
        <span>Advertise</span>
        <span>Develobers</span>
        <span>Transparencv</span>
        <span>TikTok Rewards</span>
        <span>TikTok Embeds</span>
      </div>
      <div className={cx('paragraph')}>
        <span>Help</span>
        <span>Safety</span>
        <span>Terms</span>
        <span>Privacy</span>
        <span>Creator Portal</span>
        <span>Communitv Guidelines</span>
      </div>
      <div className={cx('paragraph')}>
        <span>© 2023 TikTok</span>
      </div>
    </div>
  )
}

export default Footer
