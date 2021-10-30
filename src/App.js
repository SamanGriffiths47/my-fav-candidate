import './App.css'
import Nav from './react/components/Nav'
import Animation from './react/components/Animation'
import AjScreenshot from './images/asteroidJuggler.png'
import AjAni from './images/aj.png'
import TttScreenshot from './images/tickTacToe.png'
import TttAni from './images/ttt.png'
import Piece from './react/components/Piece'
import { connect } from 'react-redux'
import { useEffect } from 'react'

const mapStateToProps = ({ themeState }) => {
  return { themeState }
}

function App(props) {
  const styles = props.themeState.theme
    ? props.themeState.lightMode
    : props.themeState.darkMode
  const bckgrndVid = styles.backgroundVid

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
  const tickTacToe = pieceObj(
    'Tick Tac Toe',
    TttScreenshot,
    'tick-tac-toe',
    TttAni,
    'Animation of Me Playing Tic Tac Toe'
  )

  const pieces = [asteroidJuggler, tickTacToe]

  return (
    <div style={styles.appDiv}>
      <main style={styles.main}>
        <Nav styles={styles} />
        {pieces.map((piece, i) => {
          if (i % 2 > 0) {
            return (
              <section style={styles.rowL}>
                <Animation
                  key={`animation${i}`}
                  aniDiv={styles.aniDivL}
                  aniImg={styles.aniImg}
                  piece={piece}
                />
                <Piece key={`project${i}`} styles={styles} piece={piece} />
              </section>
            )
          } else {
            return (
              <section style={styles.rowR}>
                <Piece key={`project${i}`} styles={styles} piece={piece} />
                <Animation
                  key={`animation${i}`}
                  aniDiv={styles.aniDivR}
                  aniImg={styles.aniImg}
                  piece={piece}
                />
              </section>
            )
          }
        })}
      </main>
      <div id="background" style={styles.background}>
        {styles.videos.map((video, i) => (
          <video key={bckgrndVid + i} style={video} autoPlay muted loop>
            <source src={bckgrndVid} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  )
}
export default connect(mapStateToProps)(App)
