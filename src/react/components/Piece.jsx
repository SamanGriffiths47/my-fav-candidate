import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { mouseIn, mouseOut } from '../../redux/actions/themeActions'

export default function Piece (props){
  const piece = props.piece
  const imgalt = `${piece.name} Screenshot`
  const linkto = `/${piece.link}`
  const linkid = `${piece.link}Link`

  function mouseIn(e){
    e.target.style.opacity = 1
  }
  function mouseOut(e){
    e.target.style.opacity = 0
  }

  return(
    <div style={props.styles.ssContainer}>
      <h1 style={props.styles.ssTitle}>{piece.name}</h1>
      <section style={props.styles.screenshot} className='imgSec'>
        <img style={{width: "100%", height: "100%"}} src={piece.img} alt={imgalt} />
      </section>
      <section style={props.styles.linkSec} onMouseEnter={mouseIn} onMouseLeave={mouseOut} >
        <Link style={props.styles.aTag} to={linkto} id={linkid}>More Info Here</Link>
      </section>
    </div>
  )
}