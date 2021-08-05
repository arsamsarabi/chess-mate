import type { ThemeType } from '#types/theme'

const Colors = {
  white: '#f1f1f1',
  black: '#0f0f0f',
  gallery: '#EEEEEE',
  brand: '#4bbd95',
  brandDark: '#398E70',
  bostonBlue: '#368cbf',
  greyLight: '#777777',
  mercury: '#E6E6E6',
  tuatara: '#3d3d3b',
  dandelion: '#fed95c',
  chamois: '#efdab6',
  teak: '#b59863',
}

const defaultTheme: ThemeType = {
  mode: 'light',
  font: {
    family: {
      main: "'Source Serif Pro', serif",
      heading: "'Viaoda Libre', Arial",
    },
    sizes: [0, 12, 14, 16, 20, 24, 28, 36, 42],
  },
  palette: {
    light: {
      primary: Colors.brand,
      secondary: Colors.bostonBlue,
      accent: Colors.dandelion,
      text: Colors.black,
      contrast: Colors.gallery,
      bg: Colors.gallery,
      chess: {
        w: { bg: Colors.chamois },
        b: { bg: Colors.teak },
      },
    },
    dark: {
      primary: Colors.brand,
      secondary: Colors.bostonBlue,
      accent: Colors.dandelion,
      text: Colors.gallery,
      contrast: Colors.black,
      bg: Colors.black,
      chess: {
        w: { bg: Colors.mercury },
        b: { bg: Colors.tuatara },
      },
    },
    common: {
      black: Colors.black,
      white: Colors.white,
      gray: {
        50: ' #fafafa',
        100: ' #f5f5f5',
        200: ' #eeeeee',
        300: ' #e0e0e0',
        400: ' #bdbdbd',
        500: ' #9e9e9e',
        600: ' #757575',
        700: ' #616161',
        800: ' #424242',
        900: ' #212121',
      },
    },
  },
  header: {
    hight: '88px',
  },
  board: {
    dimensions: '80vh',
  },
}

export default defaultTheme
