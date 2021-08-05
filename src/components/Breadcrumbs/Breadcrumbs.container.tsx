import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { prettyPathnames } from '#navigation/routes'
import Breadcrumb from './Breadcrumbs'

export const HeaderContainer: FC = () => {
  const { pathname } = useLocation()

  const pathnameMapper = (path: string) => {
    return prettyPathnames[path]
  }

  const paths = pathname
    .split('/')
    .filter(i => i.length)
    .map(pathnameMapper)

  return (
    <Breadcrumb>
      <Breadcrumb.Root>Home</Breadcrumb.Root>
      {paths.map((p, i) => (
        <Breadcrumb.Inner key={`${i}-${p}`}>
          <Breadcrumb.Separator>/</Breadcrumb.Separator>
          <Breadcrumb.Path>{p}</Breadcrumb.Path>
        </Breadcrumb.Inner>
      ))}
    </Breadcrumb>
  )
}

export default HeaderContainer
