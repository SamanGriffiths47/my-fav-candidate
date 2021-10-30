import { LIGHT_MODE, DARK_MODE } from '../types'
import reggie from '../../images/stargif.mp4'
import negative from '../../images/stargif_neg.mp4'
import sunIcon from '../../images/sunIcon.png'
import moonIcon from '../../images/moonIcon.png'
import btnSlider from '../../images/btnSlider.png'

const iState = {
  theme: false,
  darkMode: {
    // Theme Icon
    btn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '999px',
      border: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      width: '2vw',
      height: '2vw',
      position: 'absolute',
      zIndex: 2,
      marginRight: '2.6vw',
      boxShadow: '0 0 5vw 1vw rgb(157,157,157)',
      transition: '.5s'
    },
    btnSec: {
      width: '6vw',
      height: '4vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    btnSliderSrc: btnSlider,
    btnSlider: {
      width: '4vw',
      position: 'absolute'
    },
    sunIcon: {
      width: '103%',
      height: '103%',
      opacity: 0,
      marginTop: '0.1vw',
      position: 'absolute',
      zIndex: 1,
      transition: '.5s'
    },
    ray: {
      width: '103%',
      height: '103%',
      opacity: 1,
      position: 'absolute',
      marginRight: '0.02vw',
      marginTop: '0.01vw',
      zIndex: 1,
      transition: '.5s'
    },
    moonIcon: {
      width: '103%',
      height: '103%',
      opacity: 1,
      marginTop: '0.1vw',
      position: 'absolute',
      zIndex: 2,
      transition: '.5s'
    },

    // App Display
    appDiv: {
      height: '100vh',
      width: '100vw'
    },

    // Main Background
    backgroundVid: reggie,
    background: {
      display: 'grid',
      gridTemplate: '50% 50% / 50% 50%',
      height: '100%',
      width: '100%',
      margin: 0,
      padding: 0
    },
    videos: [
      {
        height: '100%',
        width: '100%',
        objectFit: 'fill',
        margin: 0,
        padding: 0
      },
      {
        height: '100%',
        width: '100%',
        objectFit: 'fill',
        margin: 0,
        padding: 0
      },
      {
        height: '100%',
        width: '100%',
        objectFit: 'fill',
        margin: 0,
        padding: 0
      },
      {
        height: '100%',
        width: '100%',
        objectFit: 'fill',
        margin: 0,
        padding: 0
      }
    ],

    // A Tag
    aTag: {
      color: 'white'
    },

    // Nav Bar
    nav: {
      minHeight: '4.5vw',
      backgroundColor: 'rgba(11, 37, 182, 0.897)',
      background: 'linear-gradient(rgb(11, 37, 110), rgb(0, 0, 40))',
      boxShadow: '0 0 5vw 0vw rgb(94, 94, 94)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 6vw 0 6vw',
      transition: '.5s'
    },

    // Main Display
    main: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: 1,
      overflowX: 'scroll',
      color: 'white'
    },

    // Project Row
    rowR: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '85vw',
      height: '37vw',
      marginTop: '10vw',
      marginLeft: '10vw'
    },
    rowL: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '85vw',
      height: '37vw',
      marginTop: '10vw',
      marginLeft: '5vw'
    },

    // Screenshot Container
    ssContainer: {
      height: '22vw',
      padding: '2vw 3vw 4.5vw 3vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(11, 11, 110)',
      boxShadow: '0 0 6vw -2.5vw rgb(255, 255, 255)',
      transition: '.5s'
    },
    screenshot: {
      width: '35vw',
      height: '25vw',
      position: 'relative'
    },
    ssTitle: {
      WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
      color: 'white',
      WebkitTextStroke: '0.15vw',
      textAlign: 'center',
      width: '25vw',
      position: 'relative',
      marginBottom: '1vw',
      marginTop: '1vw',
      fontSize: '2.5vw'
    },
    linkSec: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      zIndex: 1,
      width: '35vw',
      height: '20.5vw',
      fontSize: '2vw',
      marginTop: '5.5vw',
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },

    // Animation Container
    aniImg: {
      width: '18vw',
      height: '18vw',
      boxShadow: '0 0 5vw 1vw rgba(255, 255, 255, 0.5',
      position: 'absolute',
      transition: '.5s'
    },
    aniDivR: {
      width: '22vw',
      height: '22vw',
      margin: '15vw 0vw 0vw 15vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(94, 94, 94)',
      transition: '.5s'
    },
    aniDivL: {
      width: '22vw',
      height: '22vw',
      margin: '10vw 15vw 0vw 0vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(94, 94, 94)',
      transition: '.5s'
    }
  },

  lightMode: {
    // Theme Icon
    btn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '999px',
      border: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      width: '2vw',
      height: '2vw',
      position: 'absolute',
      zIndex: 2,
      marginLeft: '2.6vw',
      transition: '.5s',
      boxShadow: '0 0 5vw 1vw rgb(255,195,14)'
    },
    btnSec: {
      width: '6vw',
      height: '4vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    btnSliderSrc: btnSlider,
    btnSlider: {
      width: '4vw',
      position: 'absolute'
    },
    sunIcon: {
      width: '103%',
      height: '103%',
      opacity: 1,
      marginTop: '0.1vw',
      position: 'absolute',
      zIndex: 1,
      transition: '.5s'
    },
    ray: {
      width: '205%',
      height: '205%',
      opacity: 1,
      position: 'absolute',
      marginTop: '0.01vw',
      marginRight: '0.02vw',
      zIndex: 1,
      transition: '.5s'
    },
    moonIcon: {
      width: '103%',
      height: '103%',
      marginTop: '0.1vw',
      opacity: 0,
      position: 'absolute',
      zIndex: 2,
      transition: '.5s'
    },

    // App Display
    appDiv: {
      height: '100vh',
      width: '100vw'
    },

    // Main Background
    backgroundVid: negative,
    background: {
      display: 'grid',
      gridTemplate: '50% 50% / 50% 50%',
      height: '100%',
      width: '100%',
      margin: 0,
      padding: 0
    },
    videos: [
      {
        height: '100%',
        width: '100%',
        objectFit: 'fill',
        margin: 0,
        padding: 0
      },
      {
        height: '100%',
        width: '100%',
        objectFit: 'fill',
        margin: 0,
        padding: 0
      },
      {
        height: '100%',
        width: '100%',
        objectFit: 'fill',
        margin: 0,
        padding: 0
      },
      {
        height: '100%',
        width: '100%',
        objectFit: 'fill',
        margin: 0,
        padding: 0
      }
    ],

    // A Tag
    aTag: {
      color: 'white'
    },

    // Nav Bar
    nav: {
      minHeight: '4.5vw',
      background: 'linear-gradient(rgb(110, 110, 110), rgb(50, 50, 50))',
      boxShadow: '0 0 3.5vw 1.5vw rgb(50, 50, 50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 6vw 0 6vw',
      transition: '.5s'
    },

    // Main Display
    main: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: 1,
      overflowX: 'scroll',
      color: 'white'
    },

    // Project Row
    rowR: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '85vw',
      height: '37vw',
      marginTop: '10vw',
      marginLeft: '10vw'
    },
    rowL: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '85vw',
      height: '37vw',
      marginTop: '10vw',
      marginLeft: '5vw'
    },

    // Screenshot Container
    ssContainer: {
      height: '22vw',
      padding: '2vw 3vw 4.5vw 3vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(11, 60, 160)',
      boxShadow: '0 0 2vw .2vw rgb(50, 50, 50)',
      transition: '.5s'
    },
    screenshot: {
      width: '35vw',
      height: '25vw',
      position: 'relative'
    },
    ssTitle: {
      WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
      color: 'white',
      WebkitTextStroke: '0.15vw',
      textAlign: 'center',
      width: '25vw',
      position: 'relative',
      marginBottom: '1vw',
      marginTop: '1vw',
      fontSize: '2.5vw'
    },
    linkSec: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      zIndex: 1,
      width: '35vw',
      height: '20.5vw',
      fontSize: '2vw',
      marginTop: '5.5vw',
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },

    // Animation Container
    aniImg: {
      width: '18vw',
      height: '18vw',
      boxShadow: '0 0 5vw 1vw rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      transition: '.5s'
    },
    aniDivR: {
      width: '22vw',
      height: '22vw',
      margin: '15vw 0vw 0vw 15vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(142, 142, 142)',
      boxShadow: '0 0 2vw .2vw rgb(50, 50, 50)',
      transition: '.5s'
    },
    aniDivL: {
      width: '22vw',
      height: '22vw',
      margin: '10vw 15vw 0vw 0vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(142, 142, 142)',
      boxShadow: '0 0 2vw .2vw rgb(50, 50, 50)',
      transition: '.5s'
    }
  }
}

export default function themeReducer(state = iState, action) {
  switch (action.type) {
    case LIGHT_MODE:
      return { ...state, theme: action.payload }
    case DARK_MODE:
      return { ...state, theme: action.payload }
    default:
      return { ...state }
  }
}
