import React, { FC } from 'react'
import styled from 'styled-components'

import Brand, { BrandProps } from './Brand'
import ButtonLink, { ButtonLinkProps } from './ButtonLink'
import Logo, { LogoProps } from './Logo'
import Path, { PathProps } from './Path'

export const StyledHeader = styled.header`
  height: ${({ theme }) => theme.header.height};
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 32px;
`

type HeaderSubComponents = {
  Brand: FC<BrandProps>
  ButtonLink: FC<ButtonLinkProps>
  Logo: FC<LogoProps>
  Path: FC<PathProps>
}

const Header: FC & HeaderSubComponents = ({ children, ...rest }) => {
  return <StyledHeader {...rest}>{children}</StyledHeader>
}

Header.ButtonLink = ButtonLink
Header.Logo = Logo
Header.Brand = Brand
Header.Path = Path

export default Header
