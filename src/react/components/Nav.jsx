import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { darkMode, lightMode } from '../../redux/actions/themeActions'
import sunIcon from '../../images/sunIcon.png'
import moonIcon from '../../images/moonIcon.png'
import sunRays from '../../images/sunRayIcon.png'
import ReCAPTCHA from "react-google-recaptcha-enterprise"
import { useState } from 'react'

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

  const [margin, setMargin] = useState('-8%')

  function onClick (e){
    e.preventDefault()
    margin === '10vh' ? setMargin('-8%') : setMargin('10vh')
  }

  const reCaptchaCallback = (token) => {
    token && (window.open('https://drive.google.com/file/d/15ErcrzU48qB-4L8gW_Asb9j2OsvfwEH8/view?usp=sharing', '_blank'))
  }

  return(
    <nav id="navbar">
      <div className="recapDiv">
        < ReCAPTCHA
        style={{marginTop: margin}}
        theme='dark'
        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
        onChange={reCaptchaCallback}
        />
      </div>
      <section id='linkSec'>
        <Link to="/" id="navHome">
          Home
        </Link>
        <Link to="/projects" id="navProjects">
          Projects
        </Link>
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