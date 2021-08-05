import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

export type SeparatorProps = FC<HTMLAttributes<HTMLParagraphElement>>

export const StyledSeparator = styled.p`
  color: ${({ theme }) => theme.palette.common.gray[600]};
`

const Separator: FC<SeparatorProps> = ({ children, ...rest }) => {
  return <StyledSeparator {...rest}>{children}</StyledSeparator>
}

export default Separator
