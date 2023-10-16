import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Image from '../Image'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const AccountItem = ({ data }) => {
  return (
    <Link to={`/profile/@${data.nickname}`} className={cx('wrapper')}>
      <Image src={data.avatar} />
      <div className={cx('account-info')}>
        <span className={cx('account-name')}>
          {data.full_name}
          {data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
        </span>
        <span className={cx('account-bio')}>{data.bio}</span>
      </div>
    </Link>
  )
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AccountItem
