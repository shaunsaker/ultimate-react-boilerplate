import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

import { PageContent } from './PageContent'

type PageProps = { children: ReactNode }

const Page = ({ children }: PageProps): ReactElement => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black100};
  display: flex;
  flex-direction: column;
  align-items: center;
`

Page.Content = PageContent

export { Page }
