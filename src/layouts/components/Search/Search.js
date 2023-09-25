import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'

import * as searchService from '~/services/search'
import Popper from '~/components/Popper'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'
import AccountItem from '~/components/AccountItem'
import { useDebounce } from '~/hooks'

const cx = classNames.bind(styles)

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [showPopper, setShowPopper] = useState(true)
  const [loading, setLoading] = useState(false)

  const debounced = useDebounce(searchValue, 500)

  const inputRef = useRef()

  useEffect(() => {
    //reset searchResult once searchValue no exist value
    //searValue empty => length=0 => Check and ignore call api
    if (!debounced.trim()) {
      setSearchResult([])
      return
    }

    const fetchApi = async () => {
      setLoading(true)

      const result = await searchService.search(debounced)
      setSearchResult(result)

      setLoading(false)
    }

    fetchApi()
  }, [debounced])

  const handleChange = (e) => {
    const searchInput = e.target.value

    if (!searchInput.startsWith(' ')) {
      setSearchValue(searchInput)
    }
  }

  const handleClear = () => {
    setSearchValue('')
    setSearchResult([])
    inputRef.current.focus()
  }

  // Hide/Show Popper
  const handleShowPopper = () => setShowPopper(true)
  const handleHidePopper = () => setShowPopper(false)

  return (
    //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive
        visible={showPopper && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex='-1' {...attrs}>
            <Popper>
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
                  {searchResult.map((result) => (
                    <AccountItem key={result.id} data={result} />
                  ))}
                </div>
              </div>
            </Popper>
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
            onChange={handleChange}
            onFocus={handleShowPopper}
          />
          {!!searchValue && !loading && (
            <button className={cx('clear-btn')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <span className={cx('loading')}>
              <FontAwesomeIcon icon={faSpinner} />
            </span>
          )}
          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  )
}

export default Search
