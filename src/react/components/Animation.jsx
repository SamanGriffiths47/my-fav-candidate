export default function Animation(props){
  const piece = props.piece
  const imgalt = `Animation of Me`
  return (
    <div style={props.aniDiv}>
      <img style={props.aniImg} src={piece.animation} alt={piece.desc} />
    </div>
  )
}