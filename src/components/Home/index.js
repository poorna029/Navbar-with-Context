import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <div className={!isDarkTheme ? 'hi' : 'hi1'}>
          <img
            src={
              !isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
            }
            alt="home"
            className="img"
          />
          <h1 className={isDarkTheme ? 'heading' : null}>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
