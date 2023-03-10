import React, { ReactElement } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

type MockRouterProps = { children: ReactElement }

export const RouterMock = ({ children }: MockRouterProps): ReactElement => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={children} />
      </Routes>
    </MemoryRouter>
  )
}
