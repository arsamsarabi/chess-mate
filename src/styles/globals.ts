import { createGlobalStyle, css } from 'styled-components'

import type { WithTheme } from '#types/theme'

export default createGlobalStyle<WithTheme>(({ theme }) => {
  const { mode, font, palette } = theme

  return css`
    :root {
      font-size: 16px;
    }

    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      color: inherit;
    }

    body {
      font-family: ${font.family.main};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 200;
      color: ${palette[mode].text};
      background-color: ${palette[mode].bg};
    }

    #root {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${font.family.heading};
      font-weight: 400;
    }
  `
})
