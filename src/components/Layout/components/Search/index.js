import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import AccountItem from '~/components/AccountItem'

const cx = classNames.bind(styles)

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [showPopper, setShowPopper] = useState(true)

  const inputRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 1, 1, 1])
    }, 0)
  }, [])

  const handleClear = () => {
    setSearchValue('')
    setSearchResult([])
    inputRef.current.focus()
  }

  // Hide/Show Popper
  const handleShowPopper = () => setShowPopper(true)
  const handleHidePopper = () => setShowPopper(false)

  return (
    <HeadlessTippy
      interactive
      visible={showPopper && searchResult.length > 0}
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
            <span className={cx('search-result-account-title')}>Accounts</span>
            <div className={cx('search-result-account')}>
              <div className={cx('search-result-account-item')}>
                <AccountItem
                  img='https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1693897200&x-signature=1V1Ioda1Fa25zA1SlxSZ4XoukDY%3D'
                  name='hoa hoa'
                  bio='this is a bio of hoa hoa'
                />
                <AccountItem
                  img='https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1693897200&x-signature=1V1Ioda1Fa25zA1SlxSZ4XoukDY%3D'
                  name='hoa hoa'
                  bio='this is a bio of hoa hoa'
                  check
                />
                <AccountItem
                  img='https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1693897200&x-signature=1V1Ioda1Fa25zA1SlxSZ4XoukDY%3D'
                  name='hoa hoa'
                  bio='this is a bio of hoa hoa'
                />
                <AccountItem
                  img='https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1693897200&x-signature=1V1Ioda1Fa25zA1SlxSZ4XoukDY%3D'
                  name='hoa hoa'
                  bio='this is a bio of hoa hoa'
                  check
                />
              </div>
            </div>
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHidePopper}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder='Search accounts and videos'
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={handleShowPopper}
        />
        <button className={cx('clear-btn')} onClick={handleClear}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <span className={cx('loading')}>
          <FontAwesomeIcon icon={faSpinner} />
        </span>
        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  )
}

export default Search
