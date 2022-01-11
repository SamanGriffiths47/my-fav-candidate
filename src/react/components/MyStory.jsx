import thenAni from '../../images/animations/then.png'
import nowAni from '../../images/animations/now.png'
import laterAni from '../../images/animations/later.png'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react';

export default function MyStory (props){
  const [i, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const titles = ['Who I Was', 'Who I Am', 'Who I Will Be']
  return(
  <div id='backstory' className='hasBootstrap'>
            <Carousel 
              prevLabel={i === 0 ? titles[2] : titles[i - 1]}
              nextLabel={i === 2 ? titles[0] : titles[i + 1]}
              activeIndex={i}
              onSelect={handleSelect}
              pause='hover'
              keyboard touch slide
            >
              <Carousel.Item>
                <section className='carouselSec'><img className='carouselAni' src={thenAni} alt='Me As A Chef'/></section>
                <Carousel.Caption>
                <h1>Who I Was</h1>
                <p>dsafdsa</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <section className='carouselSec'><img className='carouselAni' src={nowAni} alt='Me Studying My Craft'/></section>
                <Carousel.Caption>
                <h1>Who I Am</h1>
                <p>dvdsfds</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <section className='carouselSec'><img className='carouselAni' src={laterAni} alt='Robotics'/></section>
                <Carousel.Caption>
                <h1>Who I Will Be</h1>
                <p>Though I <i>am</i> young and excited to work in any sector of the industry, I dream of working my way up to being on
              the cutting edge of A.I. development in the next ten years. I'm fully prepared to spend that decade pushing the envelope
              at a company while utilizing my free time to go back to school and independently learn the skills necessary to make my dream
              come true!</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            {/* <h2 align='justify'>
              I am a Software Engineer! Wow, that feels so great to say after quitting my stable job as a Kitchen
              Manager, spending 4 months grinding 12+ hrs a day in the General Assembly Bootcamp, and working since then to polish my
              portfolio, teach myself new skills, and apply to positions. In 6 months I built 7 web apps from the bottom
              up, getting comfortable working in a team setting for the benefit of the current project. It was during this chrysalis-like
              stage in my development as an engineer that I fell completely smitten with the minutiae of this industry. Synthesizing
              low-latency recursive algorithms, cleaning up messy codebases with object-oriented programing (to keep them as D.R.Y as
              possible), painstakingly testing responsive web designs, B.I.F.I.R (Break It, Fix It, Repeat) as many times as it takes
              to make it right. These are all skills that I have far from perfected, but my progress in their regard has been
              personally breath-taking and I know that my infatuation with them will bring me as close to perfection as I can
              get. Though I <i>am</i> young and excited to work in any sector of the industry, I dream of working my way up to being on
              the cutting edge of A.I. development in the next ten years. I'm fully prepared to spend that decade pushing the envelope
              at a company while utilizing my free time to go back to school and independently learn the skills necessary to make my dream
              come true! Please feel free to peruse my portfolio and projects, don't hesitate to let me know what you think. Thank you
              for taking time out of your day to check out my work! 😄
            </h2> */}
          </div>
          )
}