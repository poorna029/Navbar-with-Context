import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      return (
        <div>
          <div className={!isDarkTheme ? 'nav' : 'nav1'}>
            <img
              src={
                !isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
              }
              alt="website logo"
              className="logo"
            />

            <ul className="route">
              <li>
                <Link to="/" className="text">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text">
                  About
                </Link>
              </li>
            </ul>
            <button onClick={() => toggleTheme()} data-testid="theme">
              <img
                src={
                  !isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                }
                alt="theme"
                className="logo1"
              />
            </button>
          </div>
          <hr className="hr" />
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
