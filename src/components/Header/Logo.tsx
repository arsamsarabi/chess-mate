import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLogo = styled.img`
  height: 50px;
  width: 50px;
`

export type LogoProps = { src: string; to: string; alt: string }

const Logo: FC<LogoProps> = ({ to, children, ...rest }) => {
  return (
    <Link to={to}>
      <StyledLogo {...rest}>{children}</StyledLogo>
    </Link>
  )
}

export default Logo
