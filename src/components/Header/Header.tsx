import './Header.css'
import BrightIcon from '../../assets/brightness-icon.svg'
import { ReactSVG } from 'react-svg'

const DATA_THEME = 'data-theme'
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

function Header() {
  const changeTheme = () => {
    const body = document.getElementsByTagName('body')[0]
    const newTheme =
      body.getAttribute(DATA_THEME) === 'light' ? DARK_THEME : LIGHT_THEME

    body.setAttribute(DATA_THEME, newTheme)
  }

  return (
    <header>
      <div className='bright-container' onClick={changeTheme}>
        <ReactSVG src={BrightIcon} />
      </div>

      <div className='menu'>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </div>
    </header>
  )
}

export default Header
