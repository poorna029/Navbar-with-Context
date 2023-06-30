import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div className={!isDarkTheme ? 'hi' : 'hi1'}>
          <img
            src={
              !isDarkTheme
                ? `https://assets.ccbp.in/frontend/react-js/about-light-img.png`
                : `https://assets.ccbp.in/frontend/react-js/about-dark-img.png`
            }
            alt="about"
            className="img"
          />
          <h1 className={!isDarkTheme ? null : 'heading'}>About</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
