import React, { forwardRef, HTMLProps } from 'react'
import styled, { css } from 'styled-components'

import { getTypographyCss } from '../typography/Typography'

type ButtonKind = 'primary' | 'secondary'

type ButtonProps = HTMLProps<HTMLButtonElement> & {
  type: 'button' | 'submit'
  kind: ButtonKind
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ disabled, ...props }, ref) => {
  return (
    <StyledButton {...props} as="button" ref={ref} disabled={disabled} aria-disabled={disabled} />
  )
})

export const getButtonCss: Record<ButtonKind, ReturnType<typeof css>> = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.black100};
    color: ${({ theme }) => theme.colors.black100};

    &:hover,
    &:focus-visible {
      border-color: ${({ theme }) => theme.colors.white100};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.black100};
    border-color: ${({ theme }) => theme.colors.black100};

    &:hover,
    &:focus-visible {
      border-color: ${({ theme }) => theme.colors.accent};
    }

    &:active {
      color: ${({ theme }) => theme.colors.accent};
    }
  `,
}

const SIZE = 48

const StyledButton = styled.button<{
  kind: ButtonKind
}>`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  min-width: ${SIZE}px;
  height: ${SIZE}px;
  outline: none;
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 2px solid ${({ theme }) => theme.colors.white100};
  border-radius: ${({ theme }) => theme.radius.md}px;
  padding: ${({ theme }) => theme.spacing.sm}px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${getTypographyCss['paragraph']};
  font-weight: 700;
  white-space: nowrap;
  transition: ${({ theme }) => theme.transition.default};
  ${({ kind }) => getButtonCss[kind]};

  &[aria-disabled='true'] {
    background-color: ${({ theme }) => theme.colors.white20};
    color: ${({ theme }) => theme.colors.white20};
  }
`
