import React, { FC } from 'react'

import Breadcrumbs from '#components/Breadcrumbs'
import Header from '#components/Header'
import Layout from './Layout'

export const LayoutContainer: FC = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Breadcrumbs />
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  )
}

export default LayoutContainer
