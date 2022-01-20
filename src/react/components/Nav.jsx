import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { darkMode, lightMode } from '../../redux/actions/themeActions'
import sunIcon from '../../images/sunIcon.png'
import moonIcon from '../../images/moonIcon.png'
import sunRays from '../../images/sunRayIcon.png'
import ReCAPTCHA from "react-google-recaptcha-enterprise"
import { useState } from 'react'
import { Collapse } from 'react-bootstrap'

const mapStateToProps = ({ themeState }) => {
  return { themeState }
}
const mapActionsToProps = (dispatch) => {
  return {
    initDarkMode: () => dispatch(darkMode()),
    initLightMode: () => dispatch(lightMode())
  }
}

function Nav(props){
  function themeToggle(){
    props.themeState.theme
    ? props.initDarkMode()
    : props.initLightMode()
  }

  const [margin, setMargin] = useState('0')
  const [projectShow, setProjectShow] = useState(false)

  function projectDropDown (e){
    e.type === 'blur'
    ? setProjectShow(false)
    : setProjectShow(true)
  }

  function onClick (e){
    e.preventDefault()
    margin === '0' ? setMargin('90px') : setMargin('0')
  }

  const reCaptchaCallback = (token) => {
    if (token) {
      setMargin('0')
      window.location.href = 'https://drive.google.com/file/d/1MaqfsDgvvbucTknPKiDosgyy-9PSD58q/view?usp=sharing'
    }
  }

  return(
    <nav id="navbar">
      <div id='reCaptchaDD' style={{marginTop: margin}} className="DDDiv">
        < ReCAPTCHA
        theme='dark'
        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
        onChange={reCaptchaCallback}
        />
      </div>
      <section id='linkSec'>
        <Link to="/" id="navHome">
          Home
        </Link>
        <div
          id="projectsDD"
          className="hasBootstrap"
          aria-controls="projectPieces"
          aria-expanded={projectShow}
        >
          <label htmlFor="projectPieces">
            <Link onFocus={(e)=>projectDropDown(e)} onBlur={(e)=>projectDropDown(e)} to="/projects" id="navProjects">
              Projects
            </Link>
          </label>
          <Collapse in={projectShow}>
            <ul id="projectPieces">
              {props.pieces.map((piece, i) => (
                <li
                  key={i}
                >
                  <a href={`#p${i}`}>{piece.name}</a>
                </li>
              ))}
            </ul>
          </Collapse>
        </div>
        <button
        onClick={onClick}
        id="resume">
        Resume
        </button>
        <a
          href='https://www.linkedin.com/in/saman-khaliq/'
          rel="noreferrer"
          target='_blank'
          id="navContact"
        >
          ContactMe
        </a>
        <section id='btnSec'>
          <img id='btnSlider' src={props.styles.btnSliderSrc} alt="Button Slider"/>
          <button onClick={themeToggle} id='iconBtn'>
            <img id='ray' src={sunRays} alt="Sun Rays" />
            <img id='sun' src={sunIcon} alt="Theme Icon"/>
            <img id='moon' src={moonIcon} alt="Theme Icon"/>
          </button>
        </section>
      </section>
    </nav>
  )
}
export default connect(mapStateToProps, mapActionsToProps)(Nav)