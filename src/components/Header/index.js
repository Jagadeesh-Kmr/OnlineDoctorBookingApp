import {useState} from 'react'

import {Link} from 'react-router-dom'
import {IoMdMenu} from 'react-icons/io'
import { useAuth } from '../../AuthContext';
import { FiLogOut } from "react-icons/fi";


import './index.css'

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const {logout} = useAuth()

  const onClickNavMenu = () => {
    setToggleNav(!toggleNav)
  }

  const navMbMenu = toggleNav
    ? 'nav-menu-list-mobile-dis'
    : 'nav-menu-list-mobile'

  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">

          <div className="nav-bar-mobile-logo-container">
            <Link to="/" className="nav-link">
                <img src="https://i.pinimg.com/originals/7e/22/68/7e226855867d9b8cfdc3db67993b0408.jpg" alt="doctor" className='web-logo' />
            </Link>
            <button
              className="navbar-mobile-menu-btn"
              type="button"
              onClick={onClickNavMenu}
            >
              <IoMdMenu className="nav-bar-home-menu" />
            </button>
          </div>

          <div className="nav-bar-large-container">
              <Link to="/" className="nav-link-logo">
                <img src="https://i.pinimg.com/originals/7e/22/68/7e226855867d9b8cfdc3db67993b0408.jpg" alt="doctor" className='web-logo' />
              </Link>

            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/doctors" className="nav-link">
                  Doctors
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/appointment" className="nav-link">
                  Appointment
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/payment" className="nav-link">
                  Payment
                </Link>
              </li>
            </ul>
            <button onClick={logout} className='logout-btn'><FiLogOut /></button>
          </div>
        </div>
        
        <div className={navMbMenu}>
          <Link to="/" className="nav-link mb">
            Home
          </Link>
          <Link to="/doctors" className="nav-link mb">
            Doctors
          </Link>
          <Link to="/appointment" className="nav-link mb">
            Appointment
          </Link>
          <Link to="/payment" className="nav-link mb">
            Payment
          </Link>
          <button onClick={logout} className='logout-mb-btn'>Logout</button>
        </div>
      </nav>
    </>
  )
}

export default Header