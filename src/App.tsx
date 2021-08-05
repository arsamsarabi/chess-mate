import React, { FC } from 'react'

import GlobalStyles from '#styles/globals'
import Navigation from '#navigation/Navigation'
import ContextProvider from '#context/ContextProvider'

export const App: FC = () => {
  return (
    <ContextProvider>
      <>
        <GlobalStyles />
        <Navigation />
      </>
    </ContextProvider>
  )
}

export default App
