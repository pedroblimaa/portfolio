import TimelineItem from '../../../components/TimelineItem/TimelineItem'
import { Position } from '../../../components/TimelineItem/TimelineTypes'
import './Experience.scss'
import { cardInfos } from './experienceData'

function Experience() {
  return (
    <div className='experience-section'>
      <h1 className='default-title'>Experience</h1>
      <p className='description'>My journey so far</p>
      <div className='timeline'>
        <div className='line'></div>
        <div className='cards-container'>
          {cardInfos.map((cardInfo, index) => (
            <TimelineItem
              key={index}
              itemInfo={cardInfo}
              position={index % 2 === 0 ? Position.Left : Position.Right}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
