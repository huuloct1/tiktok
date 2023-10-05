import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './UserAccountPreview.module.scss'
import Button from '~/components/Button'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

const UserAccountPreview = ({ data }) => {
  //Change format value (ex: 3.2M, 300K)
  const changeFormatValue = (value) => {
    if (value < 1000) {
      return value
    } else if (value < 1000000) {
      return (value / 1000).toFixed(0) + 'K'
    } else {
      return (value / 1000000).toFixed(2) + 'M'
    }
  }

  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <Image className={cx('avatar')} src={data.avatar} />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </header>
      <div className={cx('name')}>
        <p className={cx('user-name')}>{data.nickname}</p>
        <p className={cx('full-name')}>{data.first_name + ' ' + data.last_name}</p>
      </div>
      <div className={cx('analytics')}>
        <p className={cx('followers')}>
          <span className={cx('value')}>{changeFormatValue(data.followers_count)}</span>
          <span className={cx('label')}>Followers</span>
        </p>
        <p className={cx('likes')}>
          <span className={cx('value')}>{changeFormatValue(data.likes_count)}</span>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  )
}

UserAccountPreview.propTypes = {
  data: PropTypes.object.isRequired,
}

export default UserAccountPreview
