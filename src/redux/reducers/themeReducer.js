import { LIGHT_MODE, DARK_MODE, AUTHENTICATE, SEEN } from '../types'
import reggie from '../../images/stargif.mp4'
import negative from '../../images/stargif_neg.mp4'
import btnSlider from '../../images/btnSlider.png'

const options = { hour12: false }
const time = new Date().toLocaleString('en-US', options).split(', ')[1]
const hour = parseInt(time.slice(0, 2))

const iState = {
  authenticated: false,
  attributes: [
    {
      title: 'Teamwork',
      reason:
        "I've spent the past 7 years of my life working in the restaurant industry," +
        ' one heavily reliant on the ability of the employees to work harmoniously as a team.',
      lvl: 96,
      seen: false
    },
    {
      title: 'Communication',
      reason:
        `This one is kind of a mixed bag and depends on what you're looking for. When a best` +
        ` practice of committing often is established, I'm good at following it. I'm also an experienced writer` +
        ` and public speaker. I do, however, have a slight tendency to "overshare." Some people like it,` +
        ` some don't. I just know that I'd rather receive too much information from my team than too` +
        ` little, so I try to give my teamates that same courtesy.`,
      lvl: 94,
      seen: false
    },
    {
      title: 'Attitude',
      reason:
        'While I am a very focused and resolute person, I always try to bring joy and fun into any space' +
        " I enter. No one deserves to work at a job that depresses them, with coworkers they can't stand." +
        ' Most of the time, we see our coworkers more than our family members. I wholeheartedly believe that' +
        ' those relationships deserve effort and attention!',
      lvl: 100,
      seen: false
    },
    {
      title: 'Learning',
      reason:
        'My old boss nicknamed me sponge because of my aptitude for learning, haha! While it is a funny' +
        ' situation, it does go to show my history of being adaptable, and astute.',
      lvl: 98,
      seen: false
    },
    {
      title: 'Drive',
      reason:
        'By 19, I had worked my way up to a Sous Chef position at a Michelin Guide featured restaurant;' +
        ' I did this while completely homeless, taking showers at Planet Fitness before work.' +
        " Since then, I've honed this raw ambition, which has been without a doubt the driving factor in" +
        ' my growth as a man.',
      lvl: 110,
      seen: false
    }
  ],
  TOD:
    hour > 3 && hour < 11
      ? 'Morning'
      : hour >= 11 && hour < 17
      ? 'Afternoon'
      : 'Evening',
  theme: hour >= 17 || hour <= 3 ? false : true,
  darkMode: {
    reCapTheme: 'dark',
    var: {
      '--txtBxShdw': '0 0 1vh rgb(157,157,157)',
      // Nav Bar
      '--navBckgrnd': 'linear-gradient(rgb(11, 37, 110), rgb(0, 0, 40))',
      '--navBxShdw': '0 0 5vw 0 rgb(94, 94, 94)',
      // Home
      '--textColor': 'white',
      // Info
      '--infoBckgrnd':
        'linear-gradient(' +
        'to top right,' +
        'rgba(0, 0, 40, 0.8),' +
        'rgba(11, 37, 110, 0.8)' +
        ')',
      '--cardBckgrnd': 'rgba(0, 0, 40, 0.5)',
      // Theme Icon
      '--iconBxShdw': 'rgb(157,157,157)',
      '--iconMargin': window.chrome
        ? '0 calc(3vh + 1vw) 0 0'
        : /Safari/.test(navigator.userAgent)
        ? '0 0 0 calc(-3vh - 1vw)'
        : '0 calc(3vh + 1vw) 0 0',
      '--moonOp': '1',
      '--sunOp': '0',
      '--rayH': '3vh',
      // Project Display
      '--hoverOver': 'rgba(0, 0, 0, 0.9)',
      // Screenshot Container
      '--pieceBxShdw': '0 0 6vw -2.5vw rgb(255, 255, 255)',
      '--pieceBckgrnd':
        'linear-gradient(' +
        'to top right,' +
        'rgb(0, 0, 40),' +
        'rgb(11, 37, 110)' +
        ')',
      // Animation Container
      '--aniImgBxShdw': '0 0 5vw 1vw rgba(255, 255, 255, 0.5',
      '--aniDivBxShdw': 'none',
      '--aniDivBckgrnd':
        'linear-gradient(' +
        'to top right,' +
        'rgb(51, 51, 51),' +
        'rgb(145, 145, 145)' +
        ')',
      // Project Link
      '--aHover': 'rgb(11, 37, 110)',
      '--aActive': 'rgb(0, 0, 40)',
      '--aShadow': 'rgb(152, 152, 152)',
      '--aActiveShadow': 'rgb(200, 200, 200)',
      // Poke Badges
      '--logoBorder': 'rgb(11, 37, 110)',
      '--pbBckgrnd':
        'linear-gradient(' +
        'to top right,' +
        'rgb(51, 51, 51),' +
        'rgb(145, 145, 145)' +
        ')',
      '--logoBckgrnd':
        'linear-gradient(' +
        'to top right,' +
        'rgb(0, 0, 40),' +
        'rgb(11, 37, 110)' +
        ')',
      '--pbBxShdw': 'rgb(255, 255, 255)',
      '--pbBxShdwHvr': 'rgb(255, 255, 255, 0.6)'
    },

    // Theme Icon
    btnSliderSrc: btnSlider,

    // Main Background
    backgroundVid: reggie
  },

  lightMode: {
    reCapTheme: 'light',
    var: {
      '--txtBxShdw': 'none',
      // Nav Bar
      '--navBckgrnd': 'linear-gradient(rgb(161, 214, 249), rgb(49, 135, 214))',
      '--navBxShdw': '0 0 5vw 0 rgb(255, 195, 14)',
      // Theme Icon
      '--iconBxShdw': 'rgb(255, 195, 14)',
      '--iconMargin': window.chrome
        ? '0 0 0 calc(4vh + 3vw)'
        : /Safari/.test(navigator.userAgent)
        ? '0 0 0 calc(1vh + 0.75vw)'
        : '0 0 0 calc(4vh + 3vw)',
      '--moonOp': '0',
      '--sunOp': '1',
      '--rayH': '7.5vh',
      // Home
      '--textColor': 'black',
      // Info
      '--infoBckgrnd':
        'linear-gradient(' +
        'to top right,' +
        'rgba(49, 135, 214, 0.8),' +
        'rgba(161, 214, 249, 0.8)' +
        ')',
      '--cardBckgrnd': 'rgba(49, 135, 214, 0.3)',
      '--cardColor': 'rgb(255, 191, 0)',
      // Project Display
      '--hoverOver': 'rgba(255, 255, 255, 0.9)',
      // Screenshot Container
      '--pieceBxShdw': '0 0 6vw -0.5vw rgb(50, 50, 50)',
      '--pieceBckgrnd':
        'linear-gradient(' +
        'to top right,' +
        'rgb(49, 135, 214),' +
        'rgb(161, 214, 249)' +
        ')',
      // Animation Container
      '--aniImgBxShdw': '0 0 5vw 1vw rgba(0, 0, 0, 0.2)',
      '--aniDivBxShdw': '0 0 6vw -1vw rgb(50, 50, 50)',
      '--aniDivBckgrnd':
        'linear-gradient(' +
        'to top right,' +
        'rgb(248, 194, 30),' +
        'rgb(255, 228, 146)' +
        ')',
      // Project Link
      '--aHover': 'rgb(161, 214, 249)',
      '--aActive': 'rgb(49, 135, 214)',
      '--aShadow': 'rgb(255, 195, 14)',
      '--aActiveShadow': 'rgb(255, 220, 60)',
      // Poke Badges
      '--logoBorder': 'rgb(248, 194, 30)',
      '--logoBckgrnd':
        'linear-gradient(' +
        'to top right,' +
        'rgb(248, 194, 30),' +
        'rgb(255, 228, 146)' +
        ')',
      '--pbBckgrnd':
        'linear-gradient(' +
        'to top right,' +
        'rgb(49, 135, 214),' +
        'rgb(161, 214, 249)' +
        ')',
      '--pbBxShdw': 'rgb(50, 50, 50)',
      '--pbBxShdwHvr': 'rgba(50, 50, 50, 0.75)'
    },

    // Theme Icon
    btnSliderSrc: btnSlider,

    // Main Background
    backgroundVid: negative
  }
}

export default function themeReducer(state = iState, action) {
  switch (action.type) {
    case LIGHT_MODE:
      return { ...state, theme: action.payload }
    case DARK_MODE:
      return { ...state, theme: action.payload }
    case AUTHENTICATE:
      return { ...state, authenticated: true }
    case SEEN:
      const att = state.attributes
      att[action.payload].seen = true
      return { ...state, attributes: att }
    default:
      return { ...state }
  }
}
