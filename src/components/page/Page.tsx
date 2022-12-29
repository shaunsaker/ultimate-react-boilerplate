import React, { ReactNode } from 'react'
import styled from 'styled-components'

type PageProps = { children: ReactNode }

export const Page = ({ children }: PageProps) => {
  return (
    <Container>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.black100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContentContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
