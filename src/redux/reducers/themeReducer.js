import { LIGHT_MODE, DARK_MODE } from '../types'
import reggie from '../../images/stargif.mp4'
import negative from '../../images/stargif_neg.mp4'

const iState = {
  theme: true,
  darkMode: {
    //App Display
    appDiv: {
      height: '100vh',
      width: '100vw'
    },

    //Main Background
    backgroundVid: reggie,
    background: {
      display: 'grid',
      gridTemplate: '50% 50% / 50% 50%',
      height: '95vh',
      width: '100vw',
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

    //Nav Bar
    nav: {
      height: '5vh',
      backgroundColor: 'rgba(11, 37, 182, 0.897)',
      background:
        'linear-gradient(rgba(94, 94, 94, 0.418), rgba(11, 37, 182, 0.897))'
    },

    //Main Display
    main: {
      display: 'flex',
      height: '95vh',
      width: '100vw',
      position: 'absolute',
      zIndex: 1,
      overflowX: 'scroll'
    },

    //Project Row
    row: {
      display: 'flex',
      flexDirection: 'row'
    },

    //Screenshot Container
    rightContainer: {
      justifySelf: 'center',
      marginRight: '5vw'
    },
    leftContainer: {
      float: 'left',
      marginLeft: '5vw'
    },
    screenshot: {
      width: '25vw',
      height: '25vw'
    },
    ssTitle: {
      color: 'white'
    },
    linkSec: {
      position: 'absolute',
      zIndex: 1,
      width: '25vw',
      height: '25vw'
    },

    //Animation Container
    aniImg: {
      width: '15vw',
      height: '15vw'
    },
    aniDiv: {
      width: '30vw',
      height: '30vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(94, 94, 94, 0.418)'
    }
  },
  lightMode: {
    //App Display
    appDiv: {
      height: '100vh',
      width: '100vw'
    },

    //Main Background
    backgroundVid: negative,
    background: {
      display: 'grid',
      gridTemplate: '50% 50% / 50% 50%',
      height: '95vh',
      width: '100vw',
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

    //Nav Bar
    nav: {
      height: '5vh',
      backgroundColor: 'rgba(11, 37, 182, 0.897)',
      background:
        'linear-gradient(rgba(94, 94, 94, 0.418), rgba(11, 37, 182, 0.897))'
    },

    //Main Display
    main: {
      display: 'flex',
      height: '95vh',
      width: '100vw',
      position: 'absolute',
      zIndex: 1,
      overflowX: 'scroll'
    },

    //Project Row
    row: {
      display: 'flex',
      justifyContent: 'space-between'
    },

    //Screenshot Container
    rightContainer: {
      marginRight: '5vw'
    },
    leftContainer: {
      marginLeft: '5vw'
    },
    screenshot: {
      width: '25vw',
      height: '25vw'
    },
    ssTitle: {
      color: 'black'
    },
    linkSec: {
      position: 'absolute',
      zIndex: 1,
      width: '25vw',
      height: '25vw'
    },

    //Animation Container
    aniImg: {
      width: '15vw',
      height: '15vw',
      'box-shadow': '0 0 6vw 6vw white'
    },
    aniDiv: {
      width: '30vw',
      height: '30vw',
      margin: '7vw 0 0 15vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(94, 94, 94, 0.8)'
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
