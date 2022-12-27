import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useGoBack = () => {
  const navigate = useNavigate()

  const onBackClick = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return onBackClick
}
