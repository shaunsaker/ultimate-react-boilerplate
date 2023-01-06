import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'

import { AppProvider } from '../components/appProvider/AppProvider'

const customRender = (
  element: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> => render(element, { wrapper: AppProvider, ...options })

export * from '@testing-library/react'
export { customRender as render }
export { userEvent }
