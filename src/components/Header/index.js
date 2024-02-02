// Write your code here
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <nav className="navbar-sec">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo-img"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            data-testid="hamburgerIconButton"
            className="hamburger_iconButton"
          >
            <GiHamburgerMenu className="hamburger_icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div>
              <div className="close-btn">
                <button
                  data-testid="closeButton"
                  type="button"
                  className="popup-buttons"
                  onClick={() => close()}
                >
                  <IoMdClose className="icons" />
                </button>
              </div>
              <ul className="popup-items">
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      close()
                    }}
                  >
                    <AiFillHome className="icons" />
                    <h1>Home</h1>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => {
                      close()
                    }}
                  >
                    <BsInfoCircleFill className="icons" />
                    <h1>About</h1>
                  </Link>
                </li>
              </ul>{' '}
            </div>
          </>
        )}
      </Popup>
    </nav>
  )
}

export default withRouter(Header)
