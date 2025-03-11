import TimelineCard from './TimelineCard/TimelineCard'
import './TimelineItem.scss'
import { Position, TimelineCardProps } from './TimelineTypes'

function TimelineItem({ position, itemInfo }: TimelineCardProps) {
  return (
    <div className='timeline-item'>
      {position === Position.Left ? (
        <>
          <TimelineCard itemInfo={itemInfo} position={position} />
          <div className='company-card'>
            <img src={itemInfo.companyImg} alt={itemInfo.company} />
          </div>
          <div className={`duration-container ${position}`}>
            <div className='duration'>{itemInfo.period}</div>
          </div>
        </>
      ) : (
        <>
          <div className={`duration-container ${position}`}>
            <div className='duration'>{itemInfo.period}</div>
          </div>
          <div className='company-card'>
            <img src={itemInfo.companyImg} alt={itemInfo.company} />
          </div>
          <TimelineCard itemInfo={itemInfo} position={position} />
        </>
      )}
    </div>
  )
}

export default TimelineItem
