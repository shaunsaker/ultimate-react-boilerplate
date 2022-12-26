import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error } from './pages/error/Error'
import { Home } from './pages/home/Home'

export enum Routes {
  home = '/',
}

const router = createBrowserRouter([
  {
    path: Routes.home,
    element: <Home />,
    errorElement: <Error />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
