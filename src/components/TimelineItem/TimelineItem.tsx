import { motion } from 'motion/react'

import TimelineCard from './TimelineCard/TimelineCard'
import './TimelineItem.scss'
import { Position, TimelineCardProps } from './TimelineTypes'
import * as motionService from '../../services/MotionService'

function TimelineItem({ position, itemInfo }: TimelineCardProps) {
  const getPosition = (position: Position, inverted?: boolean) => {
    if (inverted) {
      return position === Position.Left ? Position.Right : Position.Left
    }

    return position
  }

  const getVariants = (position: Position, inverted?: boolean) => {
    const direction = getPosition(position, inverted)
    const isMobile = window.innerWidth <= 800
    return motionService.createSizeBaseVariants({ isMobile, direction })
  }

  const cardVariants = getVariants(position)
  const durationVariants = getVariants(position, true)

  const renderItem = (type: 'card' | 'period') => {
    if (type === 'card') {
      return (
        <motion.div className='timeline-card-container' variants={cardVariants}>
          <TimelineCard itemInfo={itemInfo} position={position} />
        </motion.div>
      )
    }

    return (
      <div className={`period-container ${position}`}>
        <motion.div variants={durationVariants}>
          <div className='period'>{itemInfo.period}</div>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div initial='offscreen' whileInView='onscreen' viewport={{ amount: 0.8 }}>
      <div className='timeline-item'>
        {position === Position.Left ? renderItem('card') : renderItem('period')}
        <div className={`company-card ${position}`}>
          <img src={itemInfo.companyImg} alt={itemInfo.company} />
        </div>
        {position === Position.Right ? renderItem('card') : renderItem('period')}
      </div>
    </motion.div>
  )
}

export default TimelineItem
