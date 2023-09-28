import PropTypes from 'prop-types'
import HeadlessTippy from '@tippyjs/react/headless'

import classNames from 'classnames/bind'
import Popper from '~/components/Popper'
import Button from '~/components/Button'
import Header from './Header'
import styles from './Menu.module.scss'
import { useState } from 'react'

const cx = classNames.bind(styles)

const Menu = ({ children, list = [] }) => {
  const [historyMenu, setHistoryMenu] = useState([{ data: list }])
  const currentMenu = historyMenu[historyMenu.length - 1]

  const renderList = () => {
    return currentMenu.data.map((item, index) => {
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
            if (isParent) setHistoryMenu((prev) => [...prev, item.children])
          }}
        >
          {item.title}
        </Button>
      )
    })
  }

  const handleBackToPreviousMenu = () => {
    setHistoryMenu((prev) => prev.slice(0, prev.length - 1))
  }

  const renderResult = (attrs) => (
    <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
      <Popper className={cx('menu-popper')}>
        {currentMenu.length > 1 && (
          <Header title={currentMenu.title} onBack={handleBackToPreviousMenu} />
        )}
        <div className={cx('menu-body')}>{renderList()}</div>
      </Popper>
    </div>
  )

  const handleResetMenu = () => {
    setHistoryMenu((prev) => prev.slice(0, 1))
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
        render={renderResult}
        onHidden={handleResetMenu}
      >
        {children}
      </HeadlessTippy>
    </div>
  )
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  list: PropTypes.array,
}

export default Menu
