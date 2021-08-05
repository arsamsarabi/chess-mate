import React, { FC } from 'react'
import styled from 'styled-components'

import Inner, { InnerProps } from './Inner'
import Path, { PathProps } from './Path'
import Root, { RootProps } from './Root'
import Separator, { SeparatorProps } from './Separator'

type BreadcrumbsSubComponents = {
  Root: FC<RootProps>
  Inner: FC<InnerProps>
  Path: FC<PathProps>
  Separator: FC<SeparatorProps>
}

export const StyledBreadcrumbs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.common.gray[400]};
`

const Breadcrumbs: FC & BreadcrumbsSubComponents = ({ children, ...rest }) => {
  return <StyledBreadcrumbs {...rest}>{children}</StyledBreadcrumbs>
}

Breadcrumbs.Inner = Inner
Breadcrumbs.Root = Root
Breadcrumbs.Path = Path
Breadcrumbs.Separator = Separator

export default Breadcrumbs
