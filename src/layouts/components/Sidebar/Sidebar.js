import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import configs from '~/configs'
import Menu from './Menu'
import { MenuItem } from './Menu'
import { HomeIcon, UserGroupIcon, CompassIcon, LiveIcon } from '~/components/Icons'

const cx = classNames.bind(styles)

const Sidebar = () => {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title='For you' to={configs.routes.home} icon={<HomeIcon />}></MenuItem>
        <MenuItem
          title='Following'
          to={configs.routes.following}
          icon={<UserGroupIcon />}
        ></MenuItem>
        <MenuItem title='Explore' to={configs.routes.explore} icon={<CompassIcon />}></MenuItem>
        <MenuItem title='Live' to={configs.routes.live} icon={<LiveIcon />}></MenuItem>
      </Menu>
    </aside>
  )
}

export default Sidebar
