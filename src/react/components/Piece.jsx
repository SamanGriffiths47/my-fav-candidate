export default function Piece (props){
  const piece = props.piece
  const imgalt = `${piece.name} Screenshot`

  function mouseOver(e){
    if (e.target.tagName === 'SECTION') {
      e.target.style.opacity = 1
      e.target.children[0].style.pointerEvents='all'
      e.target.children[1].style.pointerEvents='all'
    } else {
      e.target.parentElement.style.opacity = 1
      e.target.parentElement.children[0].style.pointerEvents='all'
      e.target.parentElement.children[1].style.pointerEvents='all'
    }
  }
  function mouseOut(e){
    if (e.target.tagName === 'SECTION') {
      e.target.style.opacity = 0
      e.target.children[0].style.pointerEvents='none'
      e.target.children[1].style.pointerEvents='none'
    } else {
      e.target.parentElement.style.opacity = 0
      e.target.parentElement.children[0].style.pointerEvents='none'
      e.target.parentElement.children[1].style.pointerEvents='none'
    }
  }

  return(
    <div className='pieceCont'>
      <h1 className="imgTitle">{piece.name}</h1>
      <section className='pieceImg'>
        <img src={piece.img} alt={imgalt} />
        <div className='linkDiv'>
          <section onMouseOver={mouseOver} onMouseOut={mouseOut} >
            <a className='github' href={piece.github} rel="noreferrer" target='_blank'>Github</a>
            <a className='deployment' href={piece.deployment} rel="noreferrer" target='_blank'>Website</a>
            <p className='pieceAbout'>{piece.about}</p>
          </section>
        </div>
      </section>
    </div>
  )
}

export function PieceMobile (props){
  const piece = props.piece
  const imgalt = `${piece.name} Screenshot`

  function onClick(e){
    console.log(e)
    if (e.target.tagName === 'SECTION') {
      if(e.target.style.opacity === '0' || !e.target.style.opacity){
        e.target.style.opacity = '1'
        e.target.children[0].style.pointerEvents='all'
        e.target.children[1].style.pointerEvents='all'
      }else{
        e.target.style.opacity = '0'
        e.target.children[0].style.pointerEvents='none'
        e.target.children[1].style.pointerEvents='none'
      }
    } else if(e.target.tagName === 'P') {
      if(e.target.parentElement.style.opacity === '0' || !e.target.parentElement.style.opacity){
        e.target.parentElement.style.opacity = '1'
        e.target.parentElement.children[0].style.pointerEvents='all'
        e.target.parentElement.children[1].style.pointerEvents='all'
      }else{
        e.target.parentElement.style.opacity = '0'
        e.target.parentElement.children[0].style.pointerEvents='none'
        e.target.parentElement.children[1].style.pointerEvents='none'
      }
    }
  }

  return(
    <div className='pieceCont'>
      <h1 className="imgTitle">{piece.name}</h1>
      <section className='pieceImg'>
        <img src={piece.img} alt={imgalt} />
      <div className='linkDiv'>
        <section onClick={onClick}>
          <a className='github' href={piece.github} rel="noreferrer" target='_blank'>Github</a>
          <a className='deployment' href={piece.deployment} rel="noreferrer" target='_blank'>Website</a>
          <p className='pieceAbout'>{piece.about}</p>
        </section>
      </div>
      </section>
    </div>
  )
}