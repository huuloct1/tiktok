import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck,
  faCircleXmark,
  faMagnifyingGlass,
  faSignIn,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'

import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { images } from '~/assets/images'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

const Header = () => {
  // const [searchResult, setSearchResult] = useState([])

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([])
  //   }, 0)
  // })

  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='tiktok' />
        </div>
        <Tippy
          interactive
          // visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex='-1' {...attrs}>
              <PopperWrapper>
                <div className={cx('search-result-video')}>
                  <span className={cx('search-result-video-item')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    video 1
                  </span>
                  <span className={cx('search-result-video-item')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    video 2
                  </span>
                  <span className={cx('search-result-video-item')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    video 3
                  </span>
                </div>
                <span className={cx('search-result-account-title')}>
                  Accounts
                </span>
                <div className={cx('search-result-account')}>
                  <div className={cx('search-result-account-item')}>
                    <img
                      src='https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1693897200&x-signature=1V1Ioda1Fa25zA1SlxSZ4XoukDY%3D'
                      alt='avatar'
                    />
                    <div className={cx('account-info')}>
                      <span className={cx('account-name')}>
                        hoa hoa
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      <span className={cx('account-bio')}>
                        this is a hoa hoa's bio
                      </span>
                    </div>
                  </div>
                  <div className={cx('search-result-account-item')}>
                    <img
                      src='https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1693897200&x-signature=1V1Ioda1Fa25zA1SlxSZ4XoukDY%3D'
                      alt='avatar'
                    />
                    <div className={cx('account-info')}>
                      <span className={cx('account-name')}>
                        hoa hoa
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      <span className={cx('account-bio')}>
                        this is a hoa hoa's bio
                      </span>
                    </div>
                  </div>
                  <div className={cx('search-result-account-item')}>
                    <img
                      src='https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1693897200&x-signature=1V1Ioda1Fa25zA1SlxSZ4XoukDY%3D'
                      alt='avatar'
                    />
                    <div className={cx('account-info')}>
                      <span className={cx('account-name')}>
                        hoa hoa
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      <span className={cx('account-bio')}>
                        this is a hoa hoa's bio
                      </span>
                    </div>
                  </div>
                </div>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input
              placeholder='Search accounts and videos'
              spellCheck={false}
            />
            <button className={cx('clear-btn')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <span className={cx('loading')}>
              <FontAwesomeIcon icon={faSpinner} />
            </span>
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}>
          <Button text>Upload</Button>
          <Button primary>Log in</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
