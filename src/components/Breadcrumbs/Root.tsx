import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

export type RootProps = FC<HTMLAttributes<HTMLParagraphElement>>

export const StyledRoot = styled.p`
  padding: 0 4px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.common.gray[600]};
`

const Root: FC<RootProps> = ({ children, ...rest }) => {
  return <StyledRoot {...rest}>{children}</StyledRoot>
}

export default Root
