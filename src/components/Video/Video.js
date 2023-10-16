import React from 'react'
import ReactPlayer from 'react-player/lazy'
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
        <Image src={data.user.avatar} />
      </div>

      <div className={cx('container')}>
        <div className={cx('container-2')}>
          <div className={cx('header')}>
            <div className={cx('name')}>
              <div className={cx('nick-name')}>{data.user.nickname}</div>
              <div className={cx('full-name')}>
                {data.user.first_name + ' ' + data.user.last_name}
              </div>
            </div>
            <div className={cx('text')}>{data.description}</div>
            <div className={cx('sound')}>
              <FontAwesomeIcon icon={faMusic} />
              {data.music}
            </div>
          </div>
          <span className={cx('more')}>...more</span>
        </div>
        <div className={cx('content')}>
          <div className={cx('video')}>
            <ReactPlayer
              width={300}
              height={540}
              controls={true}
              playing={false}
              loop={true}
              url={data.file_url}
            />
          </div>
          <div className={cx('actions')}>
            <div className={cx('action')}>
              <div className={cx('icon-wrapper')}>
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <span>{data.likes_count}</span>
            </div>
            <div className={cx('action')}>
              <div className={cx('icon-wrapper')}>
                <FontAwesomeIcon icon={faMessage} />
              </div>
              <span>{data.comments_count}</span>
            </div>
            <div className={cx('action')}>
              <div className={cx('icon-wrapper')}>
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <span>{data.shares_count}</span>
            </div>
            <div className={cx('action')}>
              <div className={cx('icon-wrapper')}>
                <FontAwesomeIcon icon={faShare} />
              </div>
              <span>{data.shares_count}</span>
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
