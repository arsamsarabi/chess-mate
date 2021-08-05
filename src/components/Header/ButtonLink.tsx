import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { darken } from 'polished'

import { WithTheme } from '#types/theme'

type ButtonColorTypes = 'primary' | 'secondary' | 'accent'

type StyledButtonLinkButtonLinkProps = WithTheme & {
  color: ButtonColorTypes
}

export const StyledButtonLink = styled(Link)<StyledButtonLinkButtonLinkProps>(
  ({ theme, color = 'primary' }) => {
    return css`
      min-width: 84px;
      background-color: ${theme.palette[theme.mode][color]};
      color: ${theme.palette[theme.mode].text};
      font-weight: 400;
      border: 0;
      font-size: 16px;
      border-radius: 4px;
      padding: 8px 16px;
      cursor: pointer;
      text-decoration: none;
      text-align: center;
      transition: all 0.2s ease-out;
      margin: 0 4px;

      &:hover {
        background-color: ${darken(0.05, theme.palette[theme.mode][color])};
        color: ${theme.palette.common.white};
      }
    `
  }
)

export interface ButtonLinkProps extends LinkProps {
  color?: ButtonColorTypes
}

const ButtonLink: FC<ButtonLinkProps> = ({
  children,
  color = 'primary',
  ...rest
}) => {
  return (
    <StyledButtonLink color={color} {...rest}>
      {children}
    </StyledButtonLink>
  )
}

export default ButtonLink
