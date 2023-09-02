import { Children } from 'react'
import Header from './Header'

const HeaderOnly = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='content'>{children}</div>
    </div>
  )
}

export default HeaderOnly
