import { NavLink } from 'react-router-dom';
import '../../Components/Nav/Nav.scss'

const Nav = () => {
  return (
    <nav className='main-nav'>
      <div className='brand'>
        <span>JSON API app</span>
      </div>
      <div className='nav-list'>
        <ul>
          <li>
            <NavLink to='/' className='nav-link'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/users' className='nav-link'>Users</NavLink>
          </li>
          <li>
            <NavLink to='/posts' className='nav-link'>Posts</NavLink>
          </li>
          <li>
            <NavLink to='/albums' className='nav-link'>Albums</NavLink>
          </li>
          <li>
            <NavLink to='/search' className='nav-link'>Search</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav