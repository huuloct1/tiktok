import PropTypes from 'prop-types'
import Header from '../components/Header'

const HeaderOnly = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='content'>{children}</div>
    </div>
  )
}

HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeaderOnly
