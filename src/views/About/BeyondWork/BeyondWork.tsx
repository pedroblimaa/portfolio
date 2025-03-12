import { ReactSVG } from 'react-svg'

import './BeyondWork.scss'
import Bar from '../../../assets/beyond-work/bar.svg'
import Gamepad from '../../../assets/beyond-work/gamepad.svg'
import Guitar from '../../../assets/beyond-work/guitar.svg'

function BeyondWork() {
  return (
    <div className='beyond-work-container'>
      <h1>Beyond Work</h1>
      <div className='content'>
        <p className='description'>
          If you’d like to learn a little more about me, here are some things I
          love to do
        </p>
        <div className='icons'>
          <ReactSVG src={Gamepad} />
          <ReactSVG src={Guitar} />
          <ReactSVG src={Bar} />
        </div>
      </div>
      {/* Add more content here */}
    </div>
  )
}

export default BeyondWork
