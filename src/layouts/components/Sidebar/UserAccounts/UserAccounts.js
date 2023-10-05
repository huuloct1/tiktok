import { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './UserAccounts.module.scss'
import UserAccountItem from './UserAccountItem'

const cx = classNames.bind(styles)

const UserAccounts = ({ label, data = [] }) => {
  const [showMore, setShowMore] = useState(false)

  const handleClickMoreBtn = () => {
    setShowMore(!showMore)
  }

  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>

      {showMore
        ? data.map((item) => <UserAccountItem key={item.id} data={item} />)
        : data.slice(0, 5).map((item) => <UserAccountItem key={item.id} data={item} />)}

      <p className={cx('more-btn')} onClick={handleClickMoreBtn}>
        {showMore ? <span>See less</span> : <span>See all</span>}
      </p>
    </div>
  )
}

UserAccounts.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array,
}

export default UserAccounts
