import '@fontsource/knewave/latin-400.css'
import '@fontsource/inter/latin-700.css'
import '@fontsource/inter/latin-400.css'

import styled, { css } from 'styled-components'

export type TypographyKind = 'title' | 'heading' | 'paragraph' | 'small' | 'tiny'

export const getTypographyCss: Record<TypographyKind, ReturnType<typeof css>> = {
  title: css`
    font-family: Knewave;
    font-size: 64px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white100};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      font-size: 48px;
    }
  `,
  heading: css`
    font-family: Inter;
    font-size: 32px;
    line-height: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white100};
  `,
  paragraph: css`
    font-family: Inter;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white100};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      font-size: 14px;
      line-height: 21px;
    }
  `,
  small: css`
    font-family: Inter;
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white100};
  `,
  tiny: css`
    font-family: Inter;
    font-size: 10px;
    line-height: 10px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white100};
  `,
}

export const Typography = styled.div<{
  kind: TypographyKind
}>`
  all: unset;
  ${({ kind }) => getTypographyCss[kind]};
`
