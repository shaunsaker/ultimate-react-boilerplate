import React from 'react'

import { HeaderBar } from '../../components/headerBar/HeaderBar'
import { LinkText } from '../../components/linkText/LinkText'
import { Page } from '../../components/page/Page'
import { Typography } from '../../components/typography/Typography'
import { Routes } from '../../Router'

export const Home = () => {
  return (
    <Page>
      <HeaderBar>
        <LinkText to={Routes.register}>Register</LinkText>
      </HeaderBar>

      <Typography kind="title" as="h1">
        Ello Gov'na!
      </Typography>
    </Page>
  )
}
