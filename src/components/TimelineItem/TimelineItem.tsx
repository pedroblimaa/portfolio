import './TimelineItem.css'
import { TimelineCardProps } from './TimelineTypes'

function TimelineItem({ position, itemInfo }: TimelineCardProps) {
  return (
    <div className='timeline-item'>
      <div className={`timeline-card ${position}`}>
        <h3 className='company'> {itemInfo.company}</h3>
        <h2 className='role'>{itemInfo.role}</h2>
        <ul className='bullets'>
          {itemInfo.bullets.map((bullet, index) => (
            <div key={index}>
              <span className='bullet-title'>{bullet.title}</span> -
              {bullet.description}
            </div>
          ))}
        </ul>
      </div>
      <div className='company-card'>
        <img src={itemInfo.companyImg} alt={itemInfo.company} />
      </div>
      <div className='duration-container'>
        <div className='duration'>{itemInfo.period}</div>
      </div>
    </div>
  )
}

export default TimelineItem
