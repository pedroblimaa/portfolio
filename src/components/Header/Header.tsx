import './Header.scss'
import BrightIcon from '../../assets/brightness-icon.svg'
import MainIcon from '../../assets/dark-main-icon.svg'
import { ReactSVG } from 'react-svg'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'

function Header() {
  const location = useLocation()
  const themeHandler = useTheme()

  const getIsIconFull = (path: string) => {
    return path === '/'
  }

  const [showIconFull, setShowIconFull] = useState(
    getIsIconFull(location.pathname)
  )

  useEffect(() => {
    setShowIconFull(getIsIconFull(location.pathname))
  }, [location.pathname])

  const changeTheme = () => {
    themeHandler.toggleTheme()
  }

  return (
    <header>
      <div className='left-icons'>
        <div className={`main-icon ${showIconFull ? 'full-icon' : ''}`}>
          <Link to='/'>
            <ReactSVG src={MainIcon} />
          </Link>
        </div>
        <div
          className={`bright-icon ${showIconFull ? '' : 'move-right'}`}
          onClick={changeTheme}
        >
          <ReactSVG src={BrightIcon} />
        </div>
      </div>

      <div className='menu'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/work'>Work</Link>
        <Link to='/resume'>Resume</Link>
      </div>
    </header>
  )
}

export default Header
