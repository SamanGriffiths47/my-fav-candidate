import { Link } from 'react-router-dom'

export default function Piece (props){
  const piece = props.piece
  const imgalt = `${piece.name} Screenshot`
  const linkto = `/${piece.link}`
  const linkid = `${piece.link}Link`
  return(
    <div style={props.containerStyle}>
      <h1 style={props.styles.ssTitle}>{piece.name}</h1>
      <section style={props.styles.screenshot} className='imgSec'>
        <img style={{width: "100%", height: "100%"}} src={piece.img} alt={imgalt} />
      </section>
      <section style={props.styles.linkSec}>
        <Link to={linkto} id={linkid}>More Info Here</Link>
      </section>
    </div>
  )
}