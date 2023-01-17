import styled, { css } from 'styled-components'

import { getTypographyCss } from '../typography/Typography'

export const ANCHOR_TEXT_CSS = css`
  ${getTypographyCss['paragraph']};
  font-weight: 700;
  text-decoration-line: underline;
  transition: ${({ theme }) => theme.transition.default};

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const AnchorText = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferer',
}))`
  ${ANCHOR_TEXT_CSS}
`
