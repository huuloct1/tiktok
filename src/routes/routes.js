import configs from '~/configs'
//Import Layouts
import Home from '../pages/Home'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import Upload from '../pages/Upload'
import Search from '../pages/Search'
import { HeaderOnly } from '~/layouts'

//Public routes
export const publicRoutes = [
  {
    path: configs.routes.home,
    component: Home,
  },
  {
    path: configs.routes.following,
    component: Following,
  },
  {
    path: configs.routes.explore,
    component: Home,
  },
  {
    path: configs.routes.live,
    component: Home,
  },
  {
    path: configs.routes.profile,
    component: Profile,
  },
  {
    path: configs.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: configs.routes.search,
    component: Search,
    layout: null,
  },
]

export const privateRoutes = []
