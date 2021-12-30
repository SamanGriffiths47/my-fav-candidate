import { LIGHT_MODE, DARK_MODE, AUTHENTICATE } from '../types'
import reggie from '../../images/stargif.mp4'
import negative from '../../images/stargif_neg.mp4'
import btnSlider from '../../images/btnSlider.png'

const options = { hour12: false }
const time = new Date().toLocaleString('en-US', options).split(', ')[1]
const hour = parseInt(time.slice(0, 2))

const iState = {
  authenticated: false,
  TOD:
    hour > 0 && hour < 11
      ? 'Morning'
      : hour >= 11 && hour < 17
      ? 'Afternoon'
      : 'Evening',
  theme: hour >= 17 ? false : true,
  darkMode: {
    reCapTheme: 'dark',
    var: {
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
      // Theme Icon
      '--iconBxShdw': 'rgb(157,157,157)',
      '--iconMargin': '0 5vh 0 0',
      '--moonOp': '1',
      '--sunOp': '0',
      '--rayH': '3vh',
      // Project Display
      '--hoverOver': 'rgba(0, 0, 0, 0.7)',
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
      '--pbBxShdw': 'rgb(255, 255, 255)'
    },

    // Theme Icon
    btnSliderSrc: btnSlider,

    // Main Background
    backgroundVid: reggie
  },

  lightMode: {
    reCapTheme: 'light',
    var: {
      // Nav Bar
      '--navBckgrnd': 'linear-gradient(rgb(161, 214, 249), rgb(49, 135, 214))',
      '--navBxShdw': '0 0 3.5vw 1.5vw rgb(50, 50, 50)',
      // Theme Icon
      '--iconBxShdw': 'rgb(255, 195, 14)',
      '--iconMargin': '0 0 0 5vh',
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
      // Project Display
      '--hoverOver': 'rgba(255, 255, 255, 0.7)',
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
      '--pbBxShdw': 'rgb(50, 50, 50)'
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
    default:
      return { ...state }
  }
}
