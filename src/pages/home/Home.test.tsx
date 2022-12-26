import React from 'react'

import { render, screen } from '../../test/utils'
import { Home } from './Home'

describe('Home', () => {
  it('displays greeting', async () => {
    render(<Home />)

    expect(screen.getByRole('heading')).toHaveTextContent("Ello Gov'na!")
  })
})
