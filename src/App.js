import './App.scss'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './react/components/Nav'
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
    constructor(name, img, animation, aniAlt, github, deployment, about) {
      this.name = name
      this.img = img
      this.animation = animation
      this.aniAlt = aniAlt
      this.github = github
      this.deployment = deployment
      this.about = about
    }
  }

  const asteroidJuggler = new Project(
    'Asteroid Juggler',
    AjScreenshot,
    AjAni,
    'Animation of Me In Space',
    'https://github.com/samanhg47/Asteroid_Juggler',
    'https://asteroid-juggler.surge.sh/',
    'In coding this game, I relied heavily upon the use of object-oriented programming to capitalize on the repetitive nature of animation.'.concat(
      ' I also built trigonometry equations into a Vector class as functions to increase the ease of creating smooth'.concat(
        ' motion and collision graph.'
      )
    )
  )

  const tickTacToe = new Project(
    'Tick Tac Toe',
    TttScreenshot,
    TttAni,
    'Animation of Me Playing Tic Tac Toe',
    'https://github.com/samanhg47/Tick-Tac-Toe',
    'http://tick-tac-toe.surge.sh/',
    ''
  )

  const simpleAdditions = new Project(
    'Simple Additions',
    SaScreenshot,
    SaAni,
    'Animation of Me Holding My Dog',
    'https://github.com/samanhg47/Simple-Additions',
    'https://simple-additions.netlify.app/',
    ''
  )

  const hailGaming = new Project(
    'Hail Gaming Blog',
    HgScreenshot,
    HgAni,
    'Animation of Me Gaming',
    'https://github.com/samanhg47/Hail',
    'https://hail-gaming.herokuapp.com/',
    ''
  )

  const resourceFull = new Project(
    'ReSource Full',
    RfScreenshot,
    RfAni,
    'Animation of Me Reading',
    'https://github.com/samanhg47/Resource_Full',
    'https://resource-full.herokuapp.com/',
    ''
  )

  const tmdbLibrary = new Project(
    'TMDB Library',
    TlScreenshot,
    TlAni,
    'Animation of Me As Popcorn',
    'https://github.com/samanhg47/TMDB-Library',
    'https://tmdb-library.vercel.app/',
    ''
  )

  const tmdbReThunk = new Project(
    'TMDB ReThunk',
    TrScreenshot,
    TrAni,
    'Animation of Me Trapped In TV',
    'https://github.com/samanhg47/TMDB-ReThunk',
    'https://tmdb-rethunk.vercel.app/',
    ''
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
      <div id="background">
        {[1, 1, 1, 1].map((video, i) => (
          <video
            key={bckgrndVid + i}
            id={`vid${i}`}
            playsInline
            autoPlay
            muted
            loop
          >
            <source src={bckgrndVid} type="video/mp4" />
          </video>
        ))}
      </div>
      <main id="home">
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          path="/projects"
          render={(props) => <Projects pieces={pieces} {...props} />}
        />
      </main>
    </div>
  )
}
export default connect(mapStateToProps)(App)
