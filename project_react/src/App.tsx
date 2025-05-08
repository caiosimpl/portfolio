import { ThemeProvider } from 'styled-components'

import Projects from './containers/projects'
import Sidebar from './containers/sidebar'
import About from './containers/about'
import EstiloGlobal, { Container } from './styles'
import themeLight from './themes/light'
import themeDark from './themes/dark'
import { useState, useEffect } from 'react'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkTheme(true)
    }
  }, [])

  function changeTheme() {
    const newTheme = !darkTheme
    setDarkTheme(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={darkTheme ? themeDark : themeLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
