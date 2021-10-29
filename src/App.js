import './App.css'
import Nav from './react/components/Nav'
import Animation from './react/components/Animation'
import AjScreenshot from './images/asteroidJuggler.png'
import AjAni from './images/aj.png'
import Piece from './react/components/Piece'
import { connect } from 'react-redux'

const mapStateToProps = ({ themeState }) => {
  return { themeState }
}

function App(props) {
  const styles = props.themeState.theme
    ? props.themeState.lightMode
    : props.themeState.darkMode

  function styleToggle(i) {
    let styling = null
    i % 2 > 0
      ? (styling = styles.leftContainer)
      : (styling = styles.rightContainer)
    return styling
  }

  function pieceObj(name, img, link, animation, desc) {
    const obj = {
      name: name,
      img: img,
      link: link,
      animation: animation,
      desc: desc
    }
    return obj
  }

  const asteroidJuggler = pieceObj(
    'Asteroid Juggler',
    AjScreenshot,
    'asteroid-juggler',
    AjAni,
    'Animation of Me In Space'
  )

  const pieces = [asteroidJuggler]

  return (
    <div style={styles.appDiv}>
      <Nav styles={styles.nav} />
      <main style={styles.main}>
        {pieces.map((piece, i) => (
          <section style={styles.row}>
            <Animation
              key={`animation ${i}`}
              aniDiv={styles.aniDiv}
              aniImg={styles.aniImg}
              piece={piece}
            />
            <Piece
              key={`project ${i}`}
              containerStyle={styleToggle(i)}
              styles={styles}
              piece={piece}
            />
          </section>
        ))}
      </main>

      <div id="background" style={styles.background}>
        {styles.videos.map((video, i) => (
          <video key={i} style={video} autoPlay muted loop>
            <source src={styles.backgroundVid} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  )
}
export default connect(mapStateToProps)(App)
