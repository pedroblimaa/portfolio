import './About.scss'
import BeyondWork from './BeyondWork/BeyondWork'

import Description from './Description/Description'
import TechStack from './TechStach/TechStack'

function About() {
  return (
    <div className='about-page'>
      <Description />
      <TechStack />
      <BeyondWork />
    </div>
  )
}

export default About
