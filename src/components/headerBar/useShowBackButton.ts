import { useMatch } from 'react-router-dom'

import { Routes } from '../../Router'

export const useShowBackButton = () => {
  // show a back button if we're not on the home route
  const isHomeRoute = useMatch(Routes.home)
  const showBackButton = !isHomeRoute

  return showBackButton
}