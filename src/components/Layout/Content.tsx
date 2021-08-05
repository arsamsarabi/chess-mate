import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

export const StyledContent = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  flex: 1;
`

export type ContentProps = HTMLAttributes<HTMLDivElement>

const Content: FC<ContentProps> = ({ children, ...rest }) => {
  return <StyledContent {...rest}>{children}</StyledContent>
}

export default Content
