import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

export type PathProps = FC<HTMLAttributes<HTMLParagraphElement>>

export const StyledPath = styled.p`
  padding: 0 4px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.common.gray[600]};
`

const Path: FC<PathProps> = ({ children, ...rest }) => {
  return <StyledPath {...rest}>{children}</StyledPath>
}

export default Path
