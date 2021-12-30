export default function Animation(props){
  const piece = props.piece
  return (
    <div className='aniDiv'>
      <img className='aniImg' style={props.aniImg} src={piece.animation} alt={piece.desc} />
    </div>
  )
}