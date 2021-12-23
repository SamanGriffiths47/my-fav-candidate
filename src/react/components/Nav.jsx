import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { darkMode, lightMode } from '../../redux/actions/themeActions'
import sunIcon from '../../images/sunIcon.png'
import moonIcon from '../../images/moonIcon.png'
import sunRays from '../../images/sunRayIcon.png'

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
  const videos = document.querySelectorAll('video')

  function themeToggle(){
    props.themeState.theme
    ? props.initDarkMode()
    : props.initLightMode()
  }
  return(
    <nav id="navbar">
      <section id='linkSec'>
        <Link to="/" id="navHome">
          Home
        </Link>
        <Link to="/projects" id="navProjects">
          Projects
        </Link>
        <a href="https://www.linkedin.com/in/saman-griffiths/" target="_blank" id="navContact">
          ContactMe
        </a>
      </section>
      <section id='btnSec'>
        <img id='btnSlider' src={props.styles.btnSliderSrc} alt="Button Slider"/>
        <button onClick={themeToggle} id='iconBtn'>
          <img id='ray' src={sunRays} alt="Sun Rays" />
          <img id='sun' src={sunIcon} alt="Theme Icon"/>
          <img id='moon' src={moonIcon} alt="Theme Icon"/>
        </button>
      </section>
    </nav>
  )
}
export default connect(mapStateToProps, mapActionsToProps)(Nav)