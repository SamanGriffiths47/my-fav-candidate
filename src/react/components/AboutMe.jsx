import { useEffect } from 'react'
import { connect } from 'react-redux'
import greeting from '../../images/animations/hello.png'
// front-end
import css from '../../images/pokebadges/css.png'
import html from '../../images/pokebadges/html.png'
import javascript from '../../images/pokebadges/javascript.png'
import react from '../../images/pokebadges/react.png'
import reactBootstrap from '../../images/pokebadges/react-bootstrap.png'
import redux from '../../images/pokebadges/redux.png'
import vue from '../../images/pokebadges/vue.jpeg'
import vuex from '../../images/pokebadges/vuex.png'
import vuetify from '../../images/pokebadges/vuetify.png'
import nuxt from '../../images/pokebadges/nuxt.jpeg'
// middleware / backend
import mongoose from '../../images/pokebadges/mongoose.png'
import express from '../../images/pokebadges/express.jpg'
import sequelize from '../../images/pokebadges/sequelize.png'
import SQLAlchemy from '../../images/pokebadges/SQLAlchemy.png'
import cors from '../../images/pokebadges/cors.png'
import axios from '../../images/pokebadges/axios.png'
import flask from '../../images/pokebadges/flask.jpeg'
import python from '../../images/pokebadges/python.png'
import node from '../../images/pokebadges/node.jpg'
// database
import PostgreSQL from '../../images/pokebadges/PostgreSQL.png'
import mongodb from '../../images/pokebadges/mongodb.png'
// misc
import regex from '../../images/pokebadges/regex.png'


const mapStateToProps = ({ themeState }) => {
  return { themeState }
}

function AboutMe(props){
  const attributes= [
    {
      title: 'Teamwork',
      reason: "I've spent the last 7 years of my life working in the restaurant industry which is heavily"+
      " predicated on the ability of the employees to work harmoniously as a team.",
      lvl: 86
    },
    {
      title: 'Learning',
      reason: "My old boss nicknamed me sponge because of my aptitude for learning, haha! It's a funny"+
      " situation but it goes to show my history of being adptable, astute.",
      lvl: 96
    },
    {
      title: 'Communication',
      reason: "This one's kind of a mixed bag and depends on what you're looking for. When a best"+
      " practice of committing often is established, I'm good at sticking to it. I do however have"+
      " a slight tendancy to \"overshare\". Some people like it, some don't, I just know I'd rather"+
      " recieve too much information from a subordinate than too little so I try to give superiors"+
      " that same courtesy.",
      lvl: 70
    },
    {
      title: 'Attitude',
      reason: "While I am a very serious and focused person, I always try to bring joy and fun into"+
      " any space I enter. if you don't enjoy working at you job and with your coworkers then you're doing"+
      " something wrong. Most of the time, we see our coworkers more than our family members, I strongly"+
      " believe that those relationships deserve effort and attention!",
      lvl: 96
    }
  ]

  const pokeBadges = {
    'Front End': {
      'CSS': css,
      'HTML': html,
      'Vanilla JS': javascript,
      'React.js': react,
      'React-Bootstrap': reactBootstrap,
      'Redux': redux,
      'Vue.js': vue,
      'Vuex': vuex,
      'Vuetify': vuetify,
      'Nuxt.js': nuxt
    },
    'Middleware / Backend': {
      'Axios': axios,
      'Express.js': express,
      'Node.js': node,
      'Sequelize': sequelize,
      'Mongoose': mongoose,
      'Cors': cors,
      'Python': python,
      'Flask': flask,
      'SQLAlchemy': SQLAlchemy,
    },
    'Database / Misc': {
      'MongoDB': mongodb,
      'PostgreSql': PostgreSQL,
      'Regex': regex
    },
  }

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
  const home = document.querySelector('#home')
  useEffect(()=>{
    if(home){
      setTimeout(()=>{
        home.addEventListener('scroll', loadAttr)
        loadAttr()
      }, 10)
    }
  },[home])

  return (
    <section id='aboutMe' align='center'>
      <h1 id ='greeting' className='header' align='center'>
        Good {props.themeState.TOD}! My Name is Sam'an!
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
              next ten years. I'm fully prepaired to spend that decade pushing the envelope at a company while utilizing my free time
              to go back school and independently learn the skills necessary to make my dream come true! At only 19 years old I worked
              my way up to being a Sous Chef at a restaurant featured in the Michelin Guide while completely homeless, taking showers
              at planet fitness. Trust me, I have what it takes, and if I dont I have the ambition and can-do it takes to get there!
              Please feel free to paruse my portfolio and projects, don't hesitate to let me know what you think. Thank you for taking
              time out of your day to check out my work! 😄
            </h2>
          </div>
      </section>
      <section id='pokeBadges'>
        <h1>Technological Proficiencies</h1>
        <h5>(AKA: Pokemon Badges)</h5>
        {Object.keys(pokeBadges).map((cat, i) => {
          return (
            <div id={`badgeCont${i}`} className='badgeCont' key={i}>
              <h3>{cat}</h3>
              <div id={`badgeDiv${i}`} className='badgeDiv'>
                {Object.keys(pokeBadges[cat]).map((tech, index) => {
                  return(
                  <div className='logoDiv' key={index}>
                    <p>{tech}</p>
                    <div className='logoCont'>
                      <img className='logoImg' id={`img${i}${index}`} src={pokeBadges[cat][tech]} alt={tech}/>
                    </div>
                  </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </section>
    </section>
  )
}
export default connect(mapStateToProps)(AboutMe)