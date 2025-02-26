import { ReactSVG } from 'react-svg'

import DownloadIcon from '../../assets/download-icon.svg'
import './ResumeButton.css'

function ResumeButton() {
  return (
    <a href='src/assets/PedroBonfilio_Resume.pdf' download={true}>
      <button className='primary-btn download-btn'>
        <ReactSVG src={DownloadIcon} />
        Download My Resume
      </button>
    </a>
  )
}

export default ResumeButton
