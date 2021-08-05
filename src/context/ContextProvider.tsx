import React, { ReactElement, FC } from 'react'

import ThemeProvider from './ThemeContext'
import SettingsProvider from './SettingsContext'

interface ContextProviderInterface {
  children: ReactElement
}

const ContextProvider: FC<ContextProviderInterface> = ({ children }) => {
  return (
    <ThemeProvider>
      <SettingsProvider>{children}</SettingsProvider>
    </ThemeProvider>
  )
}

export default ContextProvider
