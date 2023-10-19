import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBan,
  faCode,
  faCopy,
  faEllipsis,
  faEnvelope,
  faFlag,
  faLink,
  faLock,
} from '@fortawesome/free-solid-svg-icons'
import styles from './User.module.scss'
import Image from '../Image'
import Button from '../Button'
import VideoThumb from './VideoThumb'
import { MessagesIcon } from '../Icons'
import * as userService from '~/services/user'
import Menu from '../Popper/Menu'
import {
  faFacebook,
  faLine,
  faLinkedin,
  faPinterest,
  faReddit,
  faTelegram,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

const cx = classNames.bind(styles)

const SHARE_LIST = [
  {
    icon: <FontAwesomeIcon icon={faCode} pull='left' />,
    title: 'Embed',
  },
  {
    icon: <FontAwesomeIcon icon={faFacebook} fontSize={20} pull='left' />,
    title: 'Share to Facebook',
    // to: '',
  },
  {
    icon: <FontAwesomeIcon icon={faWhatsapp} fontSize={20} pull='left' />,
    title: 'Share to WhatsApp',
    // to: '',
  },
  {
    icon: <FontAwesomeIcon icon={faTwitter} fontSize={20} pull='left' />,
    title: 'Share to Twitter',
    // to: '',
  },
  {
    icon: <FontAwesomeIcon icon={faCopy} fontSize={20} pull='left' />,
    title: 'Copy link',
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} fontSize={20} pull='left' />,
    title: 'Share to Linkedin',
    // to: '',
  },
  {
    icon: <FontAwesomeIcon icon={faReddit} fontSize={20} pull='left' />,
    title: 'Share to Reddit',
    // to: '',
  },
  {
    icon: <FontAwesomeIcon icon={faTelegram} fontSize={20} pull='left' />,
    title: 'Share to Telegram',
    // to: '',
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} fontSize={20} pull='left' />,
    title: 'Share to Email',
    // to: '',
  },
  {
    icon: <FontAwesomeIcon icon={faLine} fontSize={20} pull='left' />,
    title: 'Share to Line',
    // to: '',
  },
  {
    icon: <FontAwesomeIcon icon={faPinterest} fontSize={20} pull='left' />,
    title: 'Share to Pinterest',
    // to: '',
  },
]

const ACTION_MORE_LIST = [
  {
    icon: <FontAwesomeIcon icon={faFlag} />,
    title: 'Report',
    to: '/report',
  },
  {
    icon: <FontAwesomeIcon icon={faBan} />,
    title: 'Block',
    to: '/block-list',
    separate: true,
  },
]

//Input data is element of Suggested List
const User = ({ data }) => {
  const [userData, setUserData] = useState({})
  const [isOptionActive, setIsOptionActive] = useState(1)

  //Fetch data of User Profile
  useEffect(() => {
    const fetchApi = async () => {
      const result = await userService.getUserProfile(data)
      setUserData(result)
    }

    fetchApi()
  }, [data])

  const optionItemList = Array.prototype.slice.call(
    document.getElementsByClassName('User_option-item__UL+pT')
  )
  const optionItemActive = Array.prototype.slice.call(
    document.getElementsByClassName(cx('active'))
  )[0]
  const slide = Array.prototype.slice.call(
    document.getElementsByClassName(cx('option-slide-item'))
  )[0]

  if (slide) {
    slide.style.left = optionItemActive.offsetLeft - 227 + 'px'
    slide.style.width = optionItemActive.offsetWidth + 'px'
  }

  optionItemList.forEach((item, index) => {
    item.onclick = function () {
      //Reset active
      const optionItemActive = Array.prototype.slice.call(
        document.getElementsByClassName(cx('active'))
      )[0]
      optionItemActive.classList.remove(cx('active'))

      if (slide) {
        slide.style.left = this.offsetLeft - 227 + 'px'
        slide.style.width = this.offsetWidth + 'px'
      }

      //Add active
      this.classList.add(cx('active'))
    }
  })
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('info')}>
          <div className={cx('info-main')}>
            <Image src={userData.avatar} />
            <div className={cx('name')}>
              <span className={cx('nick-name')}>{userData.nickname}</span>
              <span className={cx('full-name')}>
                {userData.first_name + ' ' + userData.last_name}
              </span>
              <Button primary>Follow</Button>
            </div>
          </div>

          <div className={cx('info-analytic')}>
            <div className={cx('analytic-item')}>
              <span className={cx('analytic-item--count')}>{userData.followings_count}</span>
              <span className={cx('analytic-item--label')}>Following</span>
            </div>
            <div className={cx('analytic-item')}>
              <span className={cx('analytic-item--count')}>{userData.followers_count}</span>
              <span className={cx('analytic-item--label')}>Followers</span>
            </div>
            <div className={cx('analytic-item')}>
              <span className={cx('analytic-item--count')}>{userData.likes_count}</span>
              <span className={cx('analytic-item--label')}>Likes</span>
            </div>
          </div>
          <div className={cx('info-more')}>
            <div className={cx('info-more--content')}>
              {!!userData.bio && <p>Bio: {userData.bio}</p>}
              {!!userData.facebook_url && <p>FB: {userData.facebook_url}</p>}
              {!!userData.youtube_url && <p>YTB: {userData.youtube_url}</p>}
            </div>
            <div className={cx('info-more--link')}>
              <FontAwesomeIcon icon={faLink} />
              {userData.website_url}
            </div>
          </div>
        </div>

        <div className={cx('account-actions')}>
          <>
            <Menu list={SHARE_LIST}>
              <span className={cx('account-actions--share')}>
                <MessagesIcon />
              </span>
            </Menu>
            <Menu list={ACTION_MORE_LIST}>
              <span className={cx('account-actions--more')}>
                <FontAwesomeIcon icon={faEllipsis} />
              </span>
            </Menu>
          </>
        </div>
      </div>

      <div className={cx('container')}>
        <div className={cx('option')}>
          <span className={cx('option-item', 'active')}>Videos</span>
          <span className={cx('option-item')}>
            <FontAwesomeIcon icon={faLock} />
            Liked
          </span>
          <div className={cx('option-slide')}>
            <div className={cx('option-slide-item')}></div>
          </div>
        </div>
        <div className={cx('videos')}>
          {userData.videos?.map((item) => (
            <VideoThumb key={item.id} thumb={item.thumb_url} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

User.propTypes = {
  data: PropTypes.string,
}

export default User
