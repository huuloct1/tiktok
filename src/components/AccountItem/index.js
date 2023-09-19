import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Image from '../Image'

const cx = classNames.bind(styles)

const AccountItem = ({ img, name, bio, check = false }) => {
  return (
    <div className={cx('wrapper')}>
      <Image src={img} />
      <div className={cx('account-info')}>
        <span className={cx('account-name')}>
          {name}
          {check && <FontAwesomeIcon icon={faCircleCheck} />}
        </span>
        <span className={cx('account-bio')}>{bio}</span>
      </div>
    </div>
  )
}
export default AccountItem
