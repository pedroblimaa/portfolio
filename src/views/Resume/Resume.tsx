import ResumeButton from '../../components/ResumeButton/ResumeButton'
import './Resume.scss'
import ResumeImg from '../../assets/resume.jpg'

function Resume() {
  return (
    <div className='resume-page'>
      <h1 className='default-title'>Resume</h1>
      <ResumeButton label='Download' />
      <img src={ResumeImg} alt='Resume' className='resume-img'/>
    </div>
  )
}

export default Resume
