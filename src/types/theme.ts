export type ThemeModes = 'light' | 'dark'

export type ComplexColor = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export type ChessColors = {
  bg: string
}

export type ChessPalette = {
  w: ChessColors
  b: ChessColors
}

export type ThemePalette = {
  primary: string
  secondary: string
  accent: string
  text: string
  contrast: string
  bg: string
  chess: ChessPalette
}

export type ThemeType = {
  mode: ThemeModes
  font: {
    family: {
      main: string
      heading: string
    }
    sizes: number[]
  }
  palette: {
    light: ThemePalette
    dark: ThemePalette
    common: {
      black: string
      white: string
      gray: ComplexColor
    }
  }
  header: {
    hight: string
  }
  board: {
    dimensions: string
  }
}

export type WithTheme = { theme: ThemeType }
