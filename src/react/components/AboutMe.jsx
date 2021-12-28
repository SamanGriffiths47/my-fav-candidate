import { useEffect, useState } from 'react'
import greeting from '../../images/animations/hello.png'

export default function AboutMe(props){
  const attributes= [
    {
      title: 'Teamwork',
      reason: "I've spent the last 7 years of my life working in the restaurant industry which is heavily predicated\
      on the ability of the employees to work harmoniously as a team.",
      lvl: 86
    },
    {
      title: 'Learning',
      reason: "My old boss nicknamed me sponge because of my aptitude for learning, haha! It's a funny situation but\
      it goes to show my history of being adptable, astute.",
      lvl: 96
    },
    {
      title: 'Communication',
      reason: "This one's kind of a mixed bag and depends on what you're looking for. When a best practice of committing\
      often is established, I'm good at sticking to it. I do however have a slight tendancy to \"overshare\". Some people\
      like it, some don't, I just know I'd rather recieve too much information from a subordinate than too little so I try\
      to give superiors that same courtesy.",
      lvl: 70
    },
    {
      title: 'Attitude',
      reason: "While I am a very serious and focused person, I always try to bring joy and fun into any space I enter.\
      if you don't enjoy working at you job and with your coworkers then you're doing something wrong. Most of the\
      time, we see our coworkers more than our family members, I strongly believe that those relationships deserve\
      effort and attention!",
      lvl: 96
    }
  ]

  const loadAttr = () => {
    const arr = []
    for (let i = 0; i < 4; i++){
      const level = document.getElementsByClassName('level')[i]
      const bounding = level.getBoundingClientRect()
      if(!level.classList.contains(`load${i}`)){
        if (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.right <= window.innerWidth &&
          bounding.bottom <= window.innerHeight
        ) {
          level.style.width = 'var(--lvl)'
          level.classList.add(`load`)
          level.classList.add(`l${i}`)
          arr.push(true)
        } else {
          arr.push(false)
        }
      } else {
        arr.push(true)
      }
    }
    !arr.includes(false) &&
    document.removeEventListener('scroll', loadAttr)
  }
  
  useEffect(()=>{
    if(document.querySelector('#home')){
      setTimeout(()=>{
        document.querySelector('#home').addEventListener('scroll', loadAttr)
        loadAttr()
      }, 10)
    }
  },[document.querySelector('#home')])

  
  const options = { hour12: false }
  const time = new Date().toLocaleString('en-US', options).split(', ')[1]
  const hour = parseInt(time.slice(0,2))
  return (
    <section id='aboutMe' align='center'>
      <h1 id ='greeting' className='header' align='center'>
        Good {hour > 0 && hour < 11 ? 'Morning' : hour >= 11 && hour < 17 ? 'Afternoon' : 'Evening'}! My Name is Sam'an!
      </h1>
      <img id ='greetingImg' src={greeting} alt="Animation Of Me Saying Hi"/>
      <section id ='info'>
        <section id = 'attrCont'>
          <div id ='attributes'>
            {attributes.map((attr, i) => {
              return (
                <div className="attribute" key={i}>
                  <h3 className="title">
                    {attr.title}:
                  </h3>
                  <section className="barSec">
                    <div className="bar">
                      <div className={`level`} style={{'--lvl': `${attr.lvl}%`}}></div>
                    </div>
                  </section>
                  {/* <h3 className="rsnTitle">Reasoning:</h3> */}
                  <p className="reasoning">{attr.reason}</p>
                </div>
              )
            }) }
          </div>
        </section>
          <div id='backstory'>
            <h2 align='justify'>
              I am a Software Engineer! Wow, that feels so great to say after betting on myself by quitting my stable job as a Kitchen
              Manager, spending 4 months grinding 12+ hrs a day in the General Assembly bootcamp, and working since then to polish my
              portfolio, teach myself new skills, and apply to positions. Over a 6 month period I built 7 web apps from the bottom
              up, getting comfortable working in a team setting for the benefit of the current project. Though I'm young and excited to
              work in any sector of the industry, I dream of working my way up to being on the cutting edge of A.I. development in the
              next ten years. I'm fully prepaired to spend that decade grinding pushing the envelope at a company while utilizing my
              free time to go back school and independently learn the skills necessary to make my dream come true! I worked my way up
              to being a Sous Chef at a restaurant in the Michelin Guide at the age of 19 while completely homeless, taking showers at
              planet fitness. Trust me, I have what it takes, and if I dont I have the ambition and can- do it takes to get there!
              Please feel free to paruse my portfolio and projects, don't hesitate to let me know what you think. Thank you for taking
              time out of your day to check out my work! 😄
            </h2>
          </div>
      </section>
    </section>
  )
}