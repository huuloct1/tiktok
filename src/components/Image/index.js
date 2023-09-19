import classNames from 'classnames/bind'
import styles from './Image.module.scss'
import { useState, forwardRef } from 'react'
import { images } from '~/assets/images'

const cx = classNames.bind(styles)

const Image = forwardRef(
  ({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
    const [_fallback, setFallback] = useState('')
    const handleError = () => {
      setFallback(fallback)
    }

    return (
      <img
        className={cx(styles.wrapper, className)}
        alt={alt}
        src={_fallback || src}
        ref={ref}
        {...props}
        onError={handleError}
      />
    )
  }
)

export default Image
