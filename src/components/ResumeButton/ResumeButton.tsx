import { ReactSVG } from 'react-svg'

import DownloadIcon from '../../assets/download-icon.svg'
import './ResumeButton.scss'

interface ResumeButtonProps {
  label?: string
}

function ResumeButton(props: ResumeButtonProps) {
  return (
    <a href='/public/PedroBonfilio_Resume.pdf' download={true}>
      <button className='primary-btn download-btn'>
        <ReactSVG src={DownloadIcon} />
        {props.label || 'Download My Resume'}
      </button>
    </a>
  )
}

export default ResumeButton
