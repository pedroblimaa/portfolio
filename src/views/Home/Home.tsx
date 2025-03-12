import { ReactSVG } from 'react-svg'
import './Home.scss'
import GithubIcon from '../../assets/github-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import TelegramIcon from '../../assets/telegram-icon.svg'
import ResumeButton from '../../components/ResumeButton/ResumeButton'

function Home() {
  return (
    <div className='home-page'>
      <h1 className='title'>
        Hi, I'm <span>Pedro</span> Bonfilio
      </h1>
      <p className='description'>I'm a full stack software Engineer</p>
      <ResumeButton />
      <div className='link-icons'>
        <a
          href='www.linkedin.com/in/pedro-bonfilio-lima-0693a914a'
          target='_blank'
        >
          <ReactSVG src={GithubIcon} />
        </a>
        <a
          href='https://www.linkedin.com/in/pedro-bonfilio-lima-0693a914a'
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
