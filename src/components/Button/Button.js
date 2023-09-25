import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const Button = ({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  small,
  large,
  disabled = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) => {
  let Component = 'button'
  const props = {
    onClick,
    ...passProps,
  }

  //Remove event listener when existed prop disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') delete props[key]
    })
  }

  if (to) {
    props.to = to
    Component = Link
  } else if (href) {
    props.href = href
    Component = 'a'
  }

  const customClasses = {
    [className]: className,
    primary,
    outline,
    text,
    rounded,
    small,
    large,
    disabled,
  }

  return (
    <Component className={cx('wrapper', customClasses)} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  )
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
}

export default Button
