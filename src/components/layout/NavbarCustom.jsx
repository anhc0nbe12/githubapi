import { Link } from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'
import PropTypes from 'prop-types'
function NavbarCustom({title}) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-white mb-4">
      <div className="container mx-auto">
        <div className="navbar-brand " href="/">
        <FaGithub className='d-inline pr-2 fs-2'/>
        <Link to='/' className='d-inline fs-5 text-decoration-none text-white'>{title}</Link>
        </div>
        <div className='ml-auto '>
          <Link to='/' className='btn btn-dark rounded' >Home</Link>
          <Link to='/about' className='btn btn-dark rounded' >About</Link>
        </div>
      </div>
    </nav>
  )
}

NavbarCustom.defaultProps = {
  title: 'Github Finder'
}
NavbarCustom.propTypes = {
  title : PropTypes.string
}

export default NavbarCustom
