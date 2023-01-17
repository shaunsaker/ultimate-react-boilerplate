import React, { ReactElement } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import { Error } from './pages/error/Error'
import { ForgotPassword } from './pages/forgotPassword/ForgotPassword'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { Register } from './pages/register/Register'

export enum RoutePaths {
  home = '/',
  register = '/register',
  login = '/login',
  forgotPassword = '/forgot-password',
}

// TODO: SS is there a way that we can render a catch all error route instead of declaring it with each route
const errorElement = <Error />

export const Router = (): ReactElement => {
  return (
    <HashRouter>
      <Routes>
        <Route path={RoutePaths.home} element={<Home />} errorElement={errorElement} />

        <Route path={RoutePaths.register} element={<Register />} errorElement={errorElement} />

        <Route path={RoutePaths.login} element={<Login />} errorElement={errorElement} />

        <Route
          path={RoutePaths.forgotPassword}
          element={<ForgotPassword />}
          errorElement={errorElement}
        />
      </Routes>
    </HashRouter>
  )
}
