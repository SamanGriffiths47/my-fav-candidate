import './App.css'
import { Route, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './react/components/Nav'
import Home from './react/pages/Home'
import Projects from './react/pages/Projects'
import AjScreenshot from './images/screenshots/asteroidJuggler.png'
import AjAni from './images/animations/aj.png'
import TttScreenshot from './images/screenshots/tickTacToe.png'
import TttAni from './images/animations/ttt.png'
import SaScreenshot from './images/screenshots/simpleAdditions.png'
import SaAni from './images/animations/sa.png'
import HgScreenshot from './images/screenshots/hailGaming.png'
import HgAni from './images/animations/hg.png'
import RfScreenshot from './images/screenshots/resourceFull.png'
import RfAni from './images/animations/rf.png'
import TlScreenshot from './images/screenshots/tmdbLibrary.png'
import TlAni from './images/animations/tl.png'
import TrScreenshot from './images/screenshots/tmdbReThunk.png'
import TrAni from './images/animations/tr.png'

const mapStateToProps = ({ themeState }) => {
  return { themeState }
}

function App(props) {
  const history = useHistory()
  if (history.location.pathname !== '/') {
    history.push('/')
  }

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
    'https://github.com/SamanGriffiths47/Tick-Tac-Toe'
  )

  const simpleAdditions = new Project(
    'Simple Additions',
    SaScreenshot,
    SaAni,
    'Animation of Me Holding My Dog',
    'https://github.com/SamanGriffiths47/Simple-Additions'
  )

  const hailGaming = new Project(
    'Hail Gaming Blog',
    HgScreenshot,
    HgAni,
    'Animation of Me Gaming',
    'https://github.com/SamanGriffiths47/Hail'
  )

  const resourceFull = new Project(
    'ReSource Full',
    RfScreenshot,
    RfAni,
    'Animation of Me Reading',
    'https://github.com/SamanGriffiths47/Resource_Full'
  )

  const tmdbLibrary = new Project(
    'TMDB Library',
    TlScreenshot,
    TlAni,
    'Animation of Me Eating Popcorn',
    'https://github.com/SamanGriffiths47/TMDB-Search'
  )

  const tmdbReThunk = new Project(
    'TMDB ReThunk',
    TrScreenshot,
    TrAni,
    'Animation of Me Watching Movies',
    'https://github.com/SamanGriffiths47/TMDB-ReThunk'
  )

  const pieces = [
    simpleAdditions,
    hailGaming,
    resourceFull,
    tmdbReThunk,
    asteroidJuggler,
    tickTacToe,
    tmdbLibrary
  ]

  return (
    <div
      id="appDiv"
      style={{ ...styles.var, '--winWid': `${document.body.clientWidth}` }}
    >
      <Nav styles={styles} {...props} />
      <main id="home">
        <Route exact path="/" render={(props) => <Home {...props} />} />
        {props.themeState.authenticated && (
          <Route
            path="/projects"
            render={(props) => <Projects pieces={pieces} {...props} />}
          />
        )}
      </main>
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
