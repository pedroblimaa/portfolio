import { ReactSVG } from 'react-svg'
import './Home.css'
import DownloadIcon from '../../assets/download-icon.svg'
import GithubIcon from '../../assets/github-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import TelegramIcon from '../../assets/telegram-icon.svg'

function Home() {
  return (
    <div className='home-page'>
      <h1 className='title'>
        Hi, I'm <span>Pedro</span> Bonfilio
      </h1>
      <p className='description'>I'm a full stack software Engineer</p>
      <a href='src/assets/PedroBonfilio_Resume.pdf' download={true}>
        <button className='primary-btn download-btn'>
          <ReactSVG src={DownloadIcon} />
          Download My Resume
        </button>
      </a>
      <div className='link-icons'>
        <a href='https://github.com/pedroblimaa' target='_blank'>
          <ReactSVG src={GithubIcon} />
        </a>
        <a
          href='https://www.linkedin.com/in/pedro-bonfilio-lima-0693a914a/'
          target='_blank'
        >
          <ReactSVG src={LinkedinIcon} />
        </a>
        <a href='https://t.me/bDrope' target='_blank'>
          <ReactSVG src={TelegramIcon} />
        </a>
      </div>
    </div>
  )
}

export default Home
