import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { darkMode, lightMode } from '../../redux/actions/themeActions'

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
  return(
    <nav id="navbar" style={props.styles}>
      <Link to="/" id="navHome">
        Home
      </Link>
    </nav>
  )
}
export default connect(mapStateToProps, mapActionsToProps)(Nav)