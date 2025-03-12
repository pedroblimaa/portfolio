import { ReactSVG } from 'react-svg'
import ResumeButton from '../../../components/ResumeButton/ResumeButton'
import Avatar from '../../../assets/avatar.svg'
import './Description.scss'

function Description() {
  return (
    <div className='description-container'>
      <div className='description'>
        <h1>
          Wondering Who <span>I am</span>?
        </h1>
        <p className='main-text'>
          I’m a Brazilian full stack Software Engineer, currently focused on
          Front-End
        </p>
        <ResumeButton />
        <p className='sub-text'>
          I’m passionate about automation and love both Front-End and Back-End
          development. However, life has led me to specialize more in the
          Front-End — for now.
        </p>
      </div>
      <div className='avatar-container'>
        <a
          href='https://www.linkedin.com/in/pedro-bonfilio-lima-0693a914a'
          target='_blank'
        >
          <div className='avatar'>
            <ReactSVG src={Avatar} />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Description
