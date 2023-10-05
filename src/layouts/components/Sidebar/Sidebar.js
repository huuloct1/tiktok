import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import configs from '~/configs'
import Menu from './Menu'
import { MenuItem } from './Menu'
import { HomeIcon, UserGroupIcon, CompassIcon, LiveIcon } from '~/components/Icons'
import UserAccounts from './UserAccounts'
import * as userService from '~/services/user'
import Footer from './Footer'

//FakeApi
// import fakeSuggestedAccountsApi from '~/assets/fakeData/fakeSuggestedAccountsAPI.json'

const cx = classNames.bind(styles)

const Sidebar = () => {
  const [suggestedAccounts, setSuggestedAccounts] = useState([])

  useEffect(() => {
    const fetchSuggestedApi = async () => {
      const result = await userService.getSuggested()
      setSuggestedAccounts(result)
    }

    fetchSuggestedApi()
  }, [])

  console.log(suggestedAccounts)

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

      <UserAccounts label='Suggested accounts' data={suggestedAccounts} />
      <UserAccounts label='Following accounts' />

      <Footer />
    </aside>
  )
}

export default Sidebar
