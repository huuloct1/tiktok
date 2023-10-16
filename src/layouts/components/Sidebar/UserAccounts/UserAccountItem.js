import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './UserAccounts.module.scss'
import Image from '~/components/Image'
import Popper from '~/components/Popper'
import UserAccountPreview from './UserAccountPreview'

const cx = classNames.bind(styles)

const UserAccountItem = ({ data }) => {
  const renderReview = (attrs) => (
    <div tabIndex='-1' {...attrs}>
      <Popper>
        <UserAccountPreview data={data} />
      </Popper>
    </div>
  )

  return (
    <div>
      <HeadlessTippy
        interactive
        delay={[500, 0]}
        offset={[-12, 4]}
        placement='bottom-start'
        render={renderReview}
      >
        <Link
          state={data.nickname}
          to={`/profile/@${data.nickname}`}
          className={cx('account-item')}
        >
          <Image src={data.avatar} />
          <div className={cx('account-info')}>
            <span className={cx('account-name')}>
              <span>{data.nickname}</span>
              {data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
            </span>
            <span className={cx('account-full-name')}>
              {data.first_name + ' ' + data.last_name}
            </span>
          </div>
        </Link>
      </HeadlessTippy>
    </div>
  )
}

UserAccountItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default UserAccountItem
