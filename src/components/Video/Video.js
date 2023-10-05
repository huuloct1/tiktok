import classNames from 'classnames/bind'
import styles from './Video.module.scss'
import Button from '../Button'
import Image from '../Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faHeart, faMessage, faMusic, faShare } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

const Video = ({ data }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('avatar')}>
        <Image src='https://static2.yan.vn/YanNews/202109/202109270129494778-4d2769b6-8466-4ec9-8fd8-aff6e3bbdb88.jpeg' />
      </div>

      <div className={cx('container')}>
        <div className={cx('container-2')}>
          <div className={cx('header')}>
            <div className={cx('name')}>
              <div className={cx('nick-name')}>duchoa1509</div>
              <div className={cx('full-name')}>Đức Hòa</div>
            </div>
            <div className={cx('text')}>
              minh lãy com cty. mang vê làm com chiên cá man#duchoa1509 #AnCungTikTok
              #navancungtiktok2023 #kechuyen...
            </div>
            <div className={cx('sound')}>
              <FontAwesomeIcon icon={faMusic} />
              nhạc nền - Đức Hòa
            </div>
          </div>
          <span className={cx('more')}>...more</span>
        </div>
        <div className={cx('content')}>
          <div className={cx('video')}></div>
          <div className={cx('actions')}>
            <div className={cx('action')}>
              <div className={cx('icon-wrapper')}>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <span>583.3K</span>
            </div>
            <div className={cx('action')}>
              <div className={cx('icon-wrapper')}>
                <FontAwesomeIcon icon={faMessage} />
              </div>
              <span>1883</span>
            </div>
            <div className={cx('action')}>
              <div className={cx('icon-wrapper')}>
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <span>10.3K</span>
            </div>
            <div className={cx('action')}>
              <div className={cx('icon-wrapper')}>
                <FontAwesomeIcon icon={faShare} />
              </div>
              <span>7003</span>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('follow-btn')}>
        <Button outline>Follow</Button>
      </div>
    </div>
  )
}

export default Video
