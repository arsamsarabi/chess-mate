import React, {
  createContext,
  useContext,
  useState,
  ReactElement,
  FC,
} from 'react'

type EnvTypes = 'production' | 'development'

interface SettingsState {
  env?: EnvTypes
  url?: string
}

type SettingsContext = SettingsState & {
  setEnv: (_env: EnvTypes) => void
  setUrl: (_url: string) => void
  setNewState: (newState: SettingsState) => void
}

const initialState: SettingsState = {}

const SettingsContext = createContext<SettingsContext>({
  ...initialState,
  setEnv: () => {},
  setUrl: () => {},
  setNewState: () => {},
})

interface SettingsProviderProps {
  children: ReactElement
}

const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const [state, setState] = useState<SettingsState>(initialState)

  const value: SettingsContext = {
    ...state,
    setEnv: env => setState({ ...state, env }),
    setUrl: url => setState({ ...state, url }),
    setNewState: newState => setState({ ...state, ...newState }),
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider
export const useSettingsContext = (): SettingsContext =>
  useContext(SettingsContext)
