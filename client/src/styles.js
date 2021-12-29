import reggie from './images/stargif.mp4'
import negative from './images/stargif_neg.mp4'

export let styleTheme = true

export const styles = {
  //main background
  background: {
    display: 'grid',
    gridTemplate: '50% 50% / 50% 50%',
    height: '95vh',
    width: '100vw',
    margin: 0,
    padding: 0
  },
  backgroundVid: reggie,
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
    background:
      'linear-gradient(rgba(94, 94, 94, 0.418), rgba(11, 37, 182, 0.897))'
  },

  //Main Container
  main: {
    display: 'flex',
    height: '95vh',
    width: '100vw',
    position: 'absolute',
    zIndex: 1,
    overflowX: 'scroll'
  },
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
    height: '25vh'
  },

  animationImg: {
    width: '15vw',
    height: '15vh'
  },
  animationDiv: {
    width: '30vw',
    height: '30vh'
  }
}
