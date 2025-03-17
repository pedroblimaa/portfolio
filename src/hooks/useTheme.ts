import { useEffect, useState } from 'react'

const DATA_THEME = 'data-theme'
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

export function useTheme() {
  const getInitialTheme = () => {
    const localStorageTheme = localStorage.getItem('theme')
    const preferedTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? DARK_THEME
      : LIGHT_THEME

    return localStorageTheme || preferedTheme
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute(DATA_THEME, theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME

    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return { theme, toggleTheme }
}
