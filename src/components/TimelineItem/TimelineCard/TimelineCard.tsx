import { TimelineCardProps } from '../TimelineTypes'
import './TimelineCard.scss'

function TimelineCard({ position, itemInfo }: TimelineCardProps) {
  return (
    <div className={`timeline-card default-card ${position}`}>
        <h3 className='company'> {itemInfo.company}</h3>
        <h2 className='role'>{itemInfo.role}</h2>
        <ul className='bullets'>
          {itemInfo.bullets.map((bullet, index) => (
            <li key={index}>
              <span className='bullet-title'>{bullet.title}</span> -
              {bullet.description}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TimelineCard
