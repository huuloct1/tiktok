import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleQuestion,
  faCloudArrowUp,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import configs from '~/configs'
import { images } from '~/assets/images'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import { InboxIcon, MessagesIcon } from '~/components/Icons'
import Image from '~/components/Image'
import Search from '../Search'

const cx = classNames.bind(styles)

const MENU_LIST = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
]

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/@hhoa',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get coins',
    to: '/coin',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/settings',
  },
  ...MENU_LIST,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/home',
    separate: true,
  },
]

const Header = () => {
  const currentUser = false

  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <Link to={configs.routes.home} className={cx('logo')}>
          <img src={images.logo} alt='tiktok' />
        </Link>

        <Search />

        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} offset={[0, 6]} content='Upload Video' placement='bottom'>
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudArrowUp} />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} offset={[0, 6]} content='Messages' placement='bottom'>
                <button className={cx('action-btn')}>
                  <MessagesIcon />
                  <sup className={cx('sup-badge')}>8</sup>
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} offset={[0, 6]} content='Inbox' placement='bottom'>
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <sup className={cx('sup-badge')}>14</sup>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary to='/'>
                Log in
              </Button>
            </>
          )}
          <Menu list={currentUser ? userMenu : MENU_LIST}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src='https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1693897200&x-signature=1V1Ioda1Fa25zA1SlxSZ4XoukDY%3D'
                alt='avatar'
                fallback='https://i.ytimg.com/an/NSCWwgW-rwmoE3Yc4WmJhw/featured_channel.jpg?v=63a984d2'
              />
            ) : (
              <>
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  )
}

export default Header
