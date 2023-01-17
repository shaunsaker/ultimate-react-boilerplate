import React, { ReactElement } from 'react'

import { HeaderBar } from '../../components/headerBar/HeaderBar'
import { LinkText } from '../../components/linkText/LinkText'
import { Page } from '../../components/page/Page'
import { Typography } from '../../components/typography/Typography'
import { Routes } from '../../Router'

export const Home = (): ReactElement => {
  return (
    <Page>
      <HeaderBar>
        <LinkText to={Routes.register}>Register</LinkText>
      </HeaderBar>

      <Page.Content>
        <Typography kind="title" as="h1">
          Ello Gov'na!
        </Typography>
      </Page.Content>
    </Page>
  )
}
