import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './VideoThumb.module.scss'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

const VideoThumb = ({ thumb, description }) => {
  return (
    <div className={cx('wrapper')}>
      <Image src={thumb} />
      <span className={cx('description')}>{description}</span>
    </div>
  )
}

VideoThumb.propTypes = {
  thumb: PropTypes.string,
  description: PropTypes.string,
}
export default VideoThumb
