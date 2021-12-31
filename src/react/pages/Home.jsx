import { connect } from "react-redux"
import { authenticate } from "../../redux/actions/themeActions"
import AboutMe from "../components/AboutMe"
import ReCAPTCHA from "react-google-recaptcha-enterprise"

const mapStateToProps = ({ themeState }) => {
  return { themeState }
}
const mapActionsToProps = (dispatch) => {
  return {
    authenticate: () => dispatch(authenticate())
  }
}

function Home (props) {

  const reCaptchaCallback = (token) => {
    token && props.authenticate()
  }

  return (
    <section id="landing">
      { props.themeState.authenticated ? 
        <AboutMe {...props}/> :
        <div className="resumeDiv">
          < ReCAPTCHA
          theme='dark'
          sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
          onChange={reCaptchaCallback}
          />
        </div>
      }
    </section>
  )
}
export default connect(mapStateToProps, mapActionsToProps)(Home)