export default function Piece (props){
  const piece = props.piece
  const imgalt = `${piece.name} Screenshot`

  function mouseOver(e){
    if (e.target.tagName === 'SECTION') {
      e.target.style.opacity = 1
      e.target.children[0].style.pointerEvents='all'
    } else if (e.target.tagName ==='A') {
      e.target.parentElement.style.opacity = 1
      e.target.style.pointerEvents='all'
    }
  }
  function mouseOut(e){
    if (e.target.tagName === 'SECTION') {
      e.target.style.opacity = 0
      e.target.children[0].style.pointerEvents='none'
    }
  }
  function linkClick(e){
    e.target.parentElement.style.opacity = 0
  }

  return(
    <div className='pieceCont'>
      <h1 className="imgTitle">{piece.name}</h1>
      <section className='pieceImg'>
        <img src={piece.img} alt={imgalt} />
        <div className='linkDiv'>
          <section onMouseOver={mouseOver} onMouseOut={mouseOut} >
            <a href={piece.link} onClick={linkClick} rel="noreferrer" target='_blank'>More Info Here</a>
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
    if (e.target.tagName === 'SECTION') {
      if(e.target.style.opacity === '0' || !e.target.style.opacity){
        e.target.style.opacity = '1'
        e.target.children[0].style.pointerEvents='all'
      }else{
        e.target.style.opacity = '0'
      }
    }
  }
  function linkClick(e){
    e.target.parentElement.style.opacity = 0
  }

  return(
    <div className='pieceCont'>
      <h1 className="imgTitle">{piece.name}</h1>
      <section className='pieceImg'>
        <img src={piece.img} alt={imgalt} />
      <div className='linkDiv'>
        <section onClick={onClick}>
        <a href={piece.link} onClick={linkClick} rel="noreferrer" target='_blank' >More Info Here</a>
        </section>
      </div>
      </section>
    </div>
  )
}