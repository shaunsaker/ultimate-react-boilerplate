import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import { Error } from './pages/error/Error'
import { ForgotPassword } from './pages/forgotPassword/ForgotPassword'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { Register } from './pages/register/Register'

export enum Routes {
  home = '/',
  register = '/register',
  login = '/login',
  forgotPassword = '/forgot-password',
}

// TODO: SS is there a way that we can render a catch all error route instead of declaring it with each route
const errorElement = <Error />

const router = createHashRouter([
  {
    path: Routes.home,
    element: <Home />,
    errorElement,
  },
  {
    path: Routes.register,
    element: <Register />,
    errorElement,
  },
  {
    path: Routes.login,
    element: <Login />,
    errorElement,
  },
  {
    path: Routes.forgotPassword,
    element: <ForgotPassword />,
    errorElement,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
