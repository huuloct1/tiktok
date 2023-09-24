import routesConfig from '~/configs/routes'
//Import Layouts
import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import Upload from '../pages/Upload'
import Search from '../pages/Search'
import { HeaderOnly } from '~/components/Layout'

//Public routes
export const publicRoutes = [
  {
    path: routesConfig.home,
    component: Home,
  },
  {
    path: routesConfig.following,
    component: Following,
  },
  {
    path: routesConfig.profile,
    component: Profile,
  },
  {
    path: routesConfig.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
]

export const privateRoutes = []
