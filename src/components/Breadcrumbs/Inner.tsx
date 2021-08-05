import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

export type InnerProps = FC<HTMLAttributes<HTMLDivElement>>

export const StyledInner = styled.div`
  display: flex;
  flex-direction: row;
`

const Inner: FC<InnerProps> = ({ children, ...rest }) => {
  return <StyledInner {...rest}>{children}</StyledInner>
}

export default Inner
