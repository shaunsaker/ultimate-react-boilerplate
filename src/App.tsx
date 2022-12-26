import React from 'react'

import { AppProvider } from './components/appProvider/AppProvider'
import { Router } from './Router'

export const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}
