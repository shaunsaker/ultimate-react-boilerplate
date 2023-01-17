import React, { ReactElement } from 'react'

import { HeaderBar } from '../../components/headerBar/HeaderBar'
import { Link } from '../../components/link/Link'
import { Page } from '../../components/page/Page'
import { Typography } from '../../components/typography/Typography'
import { RoutePaths } from '../../Router'

export const Home = (): ReactElement => {
  return (
    <Page>
      <HeaderBar>
        <Link to={RoutePaths.register}>Register</Link>
      </HeaderBar>

      <Page.Content>
        <Typography kind="title" as="h1">
          Ello Gov'na!
        </Typography>
      </Page.Content>
    </Page>
  )
}
