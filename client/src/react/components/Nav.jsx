import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { darkMode, lightMode } from '../../redux/actions/themeActions'
import sunIcon from '../../images/sunIcon.png'
import moonIcon from '../../images/moonIcon.png'
import sunRays from '../../images/sunRayIcon.png'
import ReCAPTCHA from "react-google-recaptcha"

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
  // useEffect(() => {
  //   const loadScriptByURL = (id, url, callback) => {
  //     const isScriptExist = document.getElementById(id);
      
  //     if (!isScriptExist) {
  //       const script = document.createElement("script")
  //       script.type = "text/javascript"
  //       script.src = url
  //       script.id = id
  //       script.onload = function () {
  //         if (callback) callback()
  //       }
  //       document.body.appendChild(script)
  //     }

  //     if (isScriptExist && callback) callback()
  //     console.log(document.querySelector(`#${id}`))
  //   }
    
  //   loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_RECAPTCHA_KEY}`, function () {
  //     console.log("Script loaded!")
  //   })
  // }, [])

  function onSubmit (token){
    console.log({'token': token})
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
        <a
        // className="g-recaptcha" 
        // data-sitekey={`${process.env.REACT_APP_RECAPTCHA_KEY}`} 
        // data-callback='zonSubmit'
        // data-action='resumeClick'
        href="#" id="resume">
          Resume
        </a>
        <a href='https://www.linkedin.com/in/saman-khaliq/' target='_blank'  id="navContact">
          ContactMe
        </a>
        {/* <ReCAPTCHA
        theme='dark'
        sitekey={process.env.REACT_APP_KEY}
        onChange={onChange}
        /> */}
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