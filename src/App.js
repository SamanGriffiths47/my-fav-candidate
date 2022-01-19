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
    'With Vanilla JS, I relied heavily upon object-oriented programming, capitalizing on the repetitive nature of animation.'.concat(
      ' The trigonometry equations that I built into the Vector class as functions increased the ease of creating smooth'.concat(
        " motion and collision graphics. As for the CSS, I went for a '70s arcade style, employing TTF files".concat(
          ' to import a techno font befitting the times.'
        )
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
    "I utilized the D.O.M. to build a fun and engaging U.X. with Vanilla JS. I created a nested array to map the player's moves along the gameboard".concat(
      " and implemented recursive algorithms to drive the game logic. You'll also see that I used nested functions, following the".concat(
        ' D.R.Y. principle, to create a presentable and readable codebase.'
      )
    )
  )

  const simpleAdditions = new Project(
    'Simple Additions',
    SaScreenshot,
    SaAni,
    'Animation of Me Holding My Dog',
    'https://github.com/samanhg47/Simple-Additions',
    'https://simple-additions.netlify.app/',
    'On this project, I employed a mix of Cors middleware, JSON web tokens, and regex to secure the RESTful'.concat(
      ' API that I built with Flask, SQLAlchemy, and PostgreSQL. I also deployed AWS and GCP to export workload and store data. On the frontend, I took advantage'.concat(
        ' of the enhanced state management and routing of Nuxt.js with the bonus of creating an isomorphic application.'
      )
    )
  )

  const hailGaming = new Project(
    'Hail Gaming Blog',
    HgScreenshot,
    HgAni,
    'Animation of Me Gaming',
    'https://github.com/samanhg47/Hail',
    'https://hail-gaming.herokuapp.com/',
    'I embarked upon this PERN stack coding journey with the help of two friends, <a class="a1" rel="noreferrer"'.concat(
      ' target="_blank" href="https://github.com/Zitai01">Zitai Huang</a> and <a class="a1" rel="noreferrer"'.concat(
        ' target="_blank" href="https://github.com/robertthome">Robert Thome</a>. I led the team to make sure'.concat(
          ' we met MVP by our deadline of 5 days and leveraged GitHub for version control to create, merge, and'.concat(
            ' sometimes rebase our branches and main repository. This project was a great team-building experience for all of us!'
          )
        )
      )
    )
  )

  const resourceFull = new Project(
    'ReSource Full',
    RfScreenshot,
    RfAni,
    'Animation of Me Reading',
    'https://github.com/samanhg47/Resource_Full',
    'https://resource-full.herokuapp.com/',
    'I created this full-stack blog site with the use of the MERN stack. Mongoose ORM helped me design my MongoDB database'.concat(
      " with an easily iterable structure to optimize it's integration with frontend algorithms. With the help of the React-Boot".concat(
        'strap library, I conveyed my data in a way that reflects the sleek and modern design of most social media sites today.'
      )
    )
  )

  const tmdbLibrary = new Project(
    'TMDB Library',
    TlScreenshot,
    TlAni,
    'Animation of Me As Popcorn',
    'https://github.com/samanhg47/TMDB-Library',
    'https://tmdb-library.vercel.app/',
    'For my first time fetching and displaying data from a database, I chose to have users query the TMDB API. I enjoyed exploring'.concat(
      ' CSS flexbox for the first time on this project, choosing to let flex-wrap lay out the information as frontend algorithms iterate'.concat(
        ' over it. This was also my first foray into event listeners,'.concat(
          ' with which data is displayed as the user interacts with the page.'
        )
      )
    )
  )

  const tmdbReThunk = new Project(
    'TMDB ReThunk',
    TrScreenshot,
    TrAni,
    'Animation of Me Trapped In TV',
    'https://github.com/samanhg47/TMDB-ReThunk',
    'https://tmdb-rethunk.vercel.app/',
    'My second go at the TMDB API builds a front end U.I. with the help of React.js and Redux Thunk. I toyed with the idea of side-bar'.concat(
      'navigation, letting users choose from lists of the top movies and TV shows returned from HTTP calls made with the Axios library.'.concat(
        "I utilized Redux's state management abilities to let the user leave ratings for each show."
      )
    )
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
