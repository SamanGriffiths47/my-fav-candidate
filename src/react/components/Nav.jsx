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
    <nav id="navbar" style={props.styles.nav}>
      <Link to="/" id="navHome" style={props.styles.aTag}>
        Home
      </Link>
      <section style={props.styles.btnSec}>
        <img style={props.styles.btnSlider} src={props.styles.btnSliderSrc} alt="Button Slider"/>
        <button style={props.styles.btn} onClick={themeToggle} >
          <img style = {props.styles.ray} src={sunRays} alt="Sun Rays" />
          <img style={props.styles.sunIcon} src={sunIcon} alt="Theme Icon"/>
          <img style={props.styles.moonIcon} src={moonIcon} alt="Theme Icon"/>
        </button>
      </section>
    </nav>
  )
}
export default connect(mapStateToProps, mapActionsToProps)(Nav)