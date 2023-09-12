import Tippy from '@tippyjs/react/headless'

import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

const Menu = ({ children, list = [] }) => {
  return (
    <Tippy
      interactive
      delay={[0, 500]}
      placement='bottom-end'
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {list.map((item, index) => (
              <Button
                className={cx('menu-item')}
                key={index}
                leftIcon={item.icon}
                to={item.to}
              >
                {item.title}
              </Button>
            ))}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu
