import React from 'react'
import { CustomScrollbar } from './components/customScrollbar/CustomScrollbar'
import { GlobalStyles } from './components/globalStyles/GlobalStyles'
import { ThemeProvider } from './components/themeProvider/ThemeProvider'
import { Router } from './Router'

export const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />

      <CustomScrollbar />

      <Router />
    </ThemeProvider>
  )
}
