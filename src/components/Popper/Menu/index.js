import HeadlessTippy from '@tippyjs/react/headless'

import classNames from 'classnames/bind'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Button from '~/components/Button'
import Header from './Header'
import styles from './Menu.module.scss'
import { useState } from 'react'

const cx = classNames.bind(styles)

const Menu = ({ children, list = [] }) => {
  const [history, setHistory] = useState([{ data: list }])
  const current = history[history.length - 1]

  const renderList = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children
      const classes = cx('menu-item', {
        separate: item.separate,
      })
      return (
        <Button
          className={classes}
          key={index}
          leftIcon={item.icon}
          to={item.to}
          onClick={() => {
            if (isParent) setHistory((prev) => [...prev, item.children])
          }}
        >
          {item.title}
        </Button>
      )
    })
  }
  return (
    //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        hideOnClick={false}
        interactive
        delay={[0, 500]}
        offset={[12, 8]}
        placement='bottom-end'
        render={(attrs) => (
          <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
              {history.length > 1 && (
                <Header
                  title='Language'
                  onBack={() => {
                    setHistory((prev) => prev.slice(0, prev.length - 1))
                  }}
                />
              )}
              <div className={cx('menu-body')}>{renderList()}</div>
            </PopperWrapper>
          </div>
        )}
        onHidden={() => {
          setHistory((prev) => prev.slice(0, 1))
        }}
      >
        {children}
      </HeadlessTippy>
    </div>
  )
}

export default Menu
