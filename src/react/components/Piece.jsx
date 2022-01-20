import { useEffect } from "react"

export default function Piece (props){
  const piece = props.piece
  const imgalt = `${piece.name} Screenshot`

  function mouseOver(){
    document.getElementById(`s${props.index}`).style.opacity = 1
    document.querySelectorAll(`.a${props.index}`).forEach(element => element.style.pointerEvents = 'all')
  }
  function mouseOut(){
    document.getElementById(`s${props.index}`).style.opacity = ''
    document.querySelectorAll(`.a${props.index}`).forEach(element => element.style.pointerEvents = 'none')
  }

  useEffect(()=>{
    document.getElementById(`pieceAbout${props.index}`).innerHTML = piece.about
  })

  return(
    <div className={`pieceCont p${props.index}`}>
      <h1 className="imgTitle">{piece.name}</h1>
      <section className='pieceImg'>
        <img src={piece.img} alt={imgalt} />
        <div className='linkDiv'>
          <section className='infoSec' id={`s${props.index}`} onMouseOver={mouseOver} onMouseOut={mouseOut} >
            <a className={`github infoA a${props.index}`} id={`github${props.index}`} href={piece.github} rel="noreferrer" target='_blank'>GitHub</a>
            <a className={`deployment infoA a${props.index}`} id={`deployment${props.index}`} href={piece.deployment} rel="noreferrer" target='_blank'>Website</a>
            <p className='pieceAbout' id={`pieceAbout${props.index}`}></p>
          </section>
        </div>
      </section>
    </div>
  )
}

export function PieceMobile (props){
  const piece = props.piece
  const imgalt = `${piece.name} Screenshot`

  function onClick(){
    if (!document.getElementById(`s${props.index}`).style.opacity) {
      document.querySelectorAll(`.infoA`).forEach(element => element.style.pointerEvents = 'none')
      document.querySelectorAll(`.infoSec`).forEach(element => element.style.opacity = '')
      document.getElementById(`s${props.index}`).style.opacity = 1
      document.querySelectorAll(`.a${props.index}`).forEach(element => element.style.pointerEvents = 'all')
    } else {
      document.getElementById(`s${props.index}`).style.opacity = ''
      document.querySelectorAll(`.a${props.index}`).forEach(element => element.style.pointerEvents = 'none')
    }
  }

  useEffect(()=>{
    document.getElementById(`pieceAbout${props.index}`).innerHTML = piece.about
  })

  return(
    <div className={`pieceCont p${props.index}`}>
      <h1 className="imgTitle">{piece.name}</h1>
      <section className='pieceImg'>
        <img src={piece.img} alt={imgalt} />
      <div className='linkDiv'>
        <section className='infoSec' id={`s${props.index}`} onClick={onClick}>
          <a className={`github infoA a${props.index}`} id={`github${props.index}`} href={piece.github} rel="noreferrer" target='_blank'>GitHub</a>
          <a className={`deployment infoA a${props.index}`} id={`deployment${props.index}`} href={piece.deployment} rel="noreferrer" target='_blank'>Website</a>
          <p className='pieceAbout' id={`pieceAbout${props.index}`}></p>
        </section>
      </div>
      </section>
    </div>
  )
}