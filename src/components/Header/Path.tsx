import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

export const StyledPath = styled.p``

export type PathProps = FC<HTMLAttributes<HTMLParagraphElement>>

const Path: FC<PathProps> = ({ children, ...rest }) => {
  return <StyledPath {...rest}>{children}</StyledPath>
}

export default Path
