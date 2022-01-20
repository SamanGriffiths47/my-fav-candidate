import { useEffect } from 'react'
import { connect } from 'react-redux'
import { seen } from '../../redux/actions/themeActions'

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
import tailwind from '../../images/pokebadges/tailwind.png'

// middleware / backend
import mongoose from '../../images/pokebadges/mongoose.png'
import express from '../../images/pokebadges/express.jpg'
import sequelize from '../../images/pokebadges/sequelize.png'
import SQLAlchemy from '../../images/pokebadges/SQLAlchemy.png'
import jwt from '../../images/pokebadges/jwt.png'
import cors from '../../images/pokebadges/cors.png'
import axios from '../../images/pokebadges/axios.png'
import flask from '../../images/pokebadges/flask.jpeg'
import python from '../../images/pokebadges/python.png'
import node from '../../images/pokebadges/node.jpg'

// database
import PostgreSQL from '../../images/pokebadges/PostgreSQL.png'
import sql from '../../images/pokebadges/sql.png'
import mongodb from '../../images/pokebadges/mongodb.png'
// misc
import regexLight from '../../images/pokebadges/regexLight.png'
import regexDark from '../../images/pokebadges/regexDark.png'
import aws from '../../images/pokebadges/aws.jpeg'
import gcp from '../../images/pokebadges/GCP.jpeg'
import git from '../../images/pokebadges/git.png'
import MyStory from '../components/MyStory'


const mapStateToProps = ({ themeState }) => {
  return { themeState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    seen: (i) => {dispatch(seen(i))}
  }
}

function Home(props){
  const TOD = props.themeState.TOD
  const attributes = props.themeState.attributes

  const pokeBadges = {
    'Front End': {
      'CSS': css,
      'HTML': html,
      'Vanilla JS': javascript,
      'Tailwind': tailwind,
      'React.js': react,
      'React-Bootstrap': reactBootstrap,
      'Redux': redux,
      'Vue.js': vue,
      'Vuex': vuex,
      'Vuetify': vuetify,
      'Nuxt.js': nuxt,
    },
    'Middleware / Backend': {
      'Axios': axios,
      'Express.js': express,
      'Node.js': node,
      'Sequelize': sequelize,
      'Mongoose': mongoose,
      'Cors': cors,
      'JWT': jwt,
      'Python': python,
      'Flask': flask,
      'SQLAlchemy': SQLAlchemy,
    },
    'Database / Misc': {
      'MongoDB': mongodb,
      'SQL': sql,
      'PostgreSql': PostgreSQL,
      'Regex': props.themeState.theme ? regexLight : regexDark,
      'Git': git,
      'AWS': aws,
      'GCP': gcp
    },
  }


  const loadAttr = () => {
    const home = document.querySelector('#home')
    if(props.history.location.pathname === '/'){
      const arr = []
      for (let i = 0; i < attributes.length; i++){
        const level = document.getElementsByClassName('level')[i]
        const attribute = attributes[i]
        const bounding = level.getBoundingClientRect()
        if(!attribute.seen){
          if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.right <= window.innerWidth &&
            bounding.bottom <= window.innerHeight + 17
          ) {
            props.seen(i)
            level.style.width = 'var(--lvl)'
            level.classList.add(`load`)
            level.classList.add(`l${i}`)
            arr.push(true)
          } else {
            arr.push(false)
          }
        } else {
          level.style.width = 'var(--lvl)'
          arr.push(true)
        }
      }
      !arr.includes(false) &&
      home.removeEventListener('scroll', loadAttr)
    }
  }
  
  useEffect(()=>{
    document.querySelector('#home').addEventListener('scroll', loadAttr)
    setTimeout(()=>{
      loadAttr()
    }, 40)
  })

  return (
    <section id='aboutMe' align='center'>
      <h1 id ='greeting' className='header' align='center'>
        Good {TOD}! My Name is Sam'an!
      </h1>
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
        <MyStory/>
      </section>
      <section id='pokeBadges'>
        <h2>Technological Proficiencies</h2>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)