import React, {
  createContext,
  useContext,
  useState,
  ReactElement,
  FC,
  useEffect,
} from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import LocalStorage from '#lib/localstorage'
import defaultTheme from '#styles/theme'
import type { ThemeModes } from '#types/theme'

interface ThemeState {
  themeMode: ThemeModes
}

type ThemeContext = ThemeState & {
  setThemeMode: (newMode: ThemeModes) => void
}

const initialState: ThemeState = {
  themeMode: 'light',
}

const ThemeContext = createContext<ThemeContext>({
  ...initialState,
  setThemeMode: () => {},
})

interface ThemeProviderProps {
  children: ReactElement
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [state, setState] = useState<ThemeState>(initialState)

  useEffect(() => {
    const _theme = LocalStorage.get('theme')
    if (_theme) {
      setState({ ...state, themeMode: _theme as ThemeModes })
    }
  }, [])

  const value: ThemeContext = {
    ...state,
    setThemeMode: themeMode => {
      setState({ ...state, themeMode })
      LocalStorage.set('theme', themeMode)
    },
  }

  const board = {
    dimensions: `${document.body.clientWidth * 0.8}px`,
  }

  return (
    <ThemeContext.Provider value={value}>
      <SCThemeProvider
        theme={{ ...defaultTheme, board, mode: state.themeMode }}
      >
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
export const useAuthContext = (): ThemeContext => useContext(ThemeContext)
