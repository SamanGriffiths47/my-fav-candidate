import { connect } from 'react-redux'
import Projects from './Projects'

const mapStateToProps = ({ themeState }) => {
  return { themeState }
}

function Protection(props) {

  return(
    <section>
      { props.themeState.authenticated && props.addy ?
        <Projects pieces={props.pieces} {...props} /> :
        props.history.push('/')
      }
    </section>
  )
}
export default connect(mapStateToProps)(Protection)
