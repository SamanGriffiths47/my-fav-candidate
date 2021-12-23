import './App.css'
import Nav from './react/components/Nav'
import AjScreenshot from './images/asteroidJuggler.png'
import AjAni from './images/aj.png'
import TttScreenshot from './images/tickTacToe.png'
import TttAni from './images/ttt.png'
import { connect } from 'react-redux'
import Projects from './react/pages/Projects'
import { Route } from 'react-router-dom'
import Home from './react/pages/Home'

const mapStateToProps = ({ themeState }) => {
  return { themeState }
}

function App(props) {
  const styles = props.themeState.theme
    ? props.themeState.lightMode
    : props.themeState.darkMode
  const bckgrndVid = styles.backgroundVid

  class Project {
    constructor(name, img, animation, aniAlt, link) {
      this.name = name
      this.img = img
      this.animation = animation
      this.aniAlt = aniAlt
      this.link = link
    }
  }

  const asteroidJuggler = new Project(
    'Asteroid Juggler',
    AjScreenshot,
    AjAni,
    'Animation of Me In Space',
    'https://github.com/SamanGriffiths47/Asteroid_Juggler'
  )

  const tickTacToe = new Project(
    'Tick Tac Toe',
    TttScreenshot,
    TttAni,
    'Animation of Me Playing Tic Tac Toe',
    'https://github.com/SamanGriffiths47/Tick-Tac-Toe',
    ''
  )

  const pieces = [asteroidJuggler, tickTacToe]

  return (
    <div id="appDiv" style={styles.var}>
      <Nav styles={styles} />
      <Route
        exact
        path="/"
        render={(props) => <Home styles={styles} {...props} />}
      />
      <Route
        path="/projects"
        render={(props) => (
          <Projects styles={styles} pieces={pieces} {...props} />
        )}
      />
      <div id="background">
        {[1, 1, 1, 1].map((video, i) => (
          <video key={bckgrndVid + i} autoPlay muted loop>
            <source src={bckgrndVid} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  )
}
export default connect(mapStateToProps)(App)
