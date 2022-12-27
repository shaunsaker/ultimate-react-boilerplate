import styled from 'styled-components'

export const IconButton = styled.button.attrs(() => ({ type: 'button' }))`
  all: unset;
  cursor: pointer;
  display: flex;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white100};
  transition: ${({ theme }) => theme.transition.default};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.accent};
  }
`
