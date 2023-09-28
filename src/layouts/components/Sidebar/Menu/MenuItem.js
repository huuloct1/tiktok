import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

const MenuItem = ({ title, to, icon }) => {
  return (
    <NavLink className={(nav) => cx('menuItem-wrapper', { active: nav.isActive })} to={to}>
      {icon}
      <span className={cx('menuItem-title')}>{title}</span>
    </NavLink>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
}

export default MenuItem
