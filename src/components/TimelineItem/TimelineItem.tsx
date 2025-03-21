import { motion } from 'motion/react'

import TimelineCard from './TimelineCard/TimelineCard'
import './TimelineItem.scss'
import { Position, TimelineCardProps } from './TimelineTypes'

function TimelineItem({ position, itemInfo }: TimelineCardProps) {
  const createVariants = (direction: 'left' | 'right') => ({
    offscreen: {
      opacity: 0,
      x: direction === 'left' ? -200 : 200,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        period: 0.3,
      },
    },
  })

  const cardVariants = createVariants(
    position === Position.Left ? 'left' : 'right'
  )
  const durationVariants = createVariants(
    position === Position.Left ? 'right' : 'left'
  )

  const renderItem = (type: 'card' | 'period') => {
    if (type === 'card') {
      return (
        <motion.div variants={cardVariants}>
          <TimelineCard itemInfo={itemInfo} position={position} />
        </motion.div>
      )
    }

    return (
      <motion.div variants={durationVariants}>
        <div className={`period-container ${position}`}>
          <div className='period'>{itemInfo.period}</div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ amount: 0.8 }}
    >
      <div className='timeline-item'>
        {position === Position.Left ? renderItem('card') : renderItem('period')}
        <div className='company-card'>
          <img src={itemInfo.companyImg} alt={itemInfo.company} />
        </div>
        {position === Position.Right
          ? renderItem('card')
          : renderItem('period')}
      </div>
    </motion.div>
  )
}

export default TimelineItem
