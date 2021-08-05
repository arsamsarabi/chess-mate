import React, { FC } from 'react'
import styled from 'styled-components'

import Content, { ContentProps } from './Content'

export const StyledLayout = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
`

type LayoutSubComponents = {
  Content: FC<ContentProps>
}

const Layout: FC & LayoutSubComponents = ({ children, ...rest }) => {
  return <StyledLayout {...rest}>{children}</StyledLayout>
}

Layout.Content = Content

export default Layout
