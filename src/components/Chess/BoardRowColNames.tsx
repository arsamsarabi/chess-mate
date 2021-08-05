import React, { FC, HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import type { WithTheme } from '#types/theme'

type DirectionType = 'row' | 'column' | 'row-reverse' | 'column-reverse'

export type BoardRowColNamesProps = HTMLAttributes<HTMLDivElement> & {
  values: Array<string | number>
  direction?: DirectionType
  gridArea: string
}

type StyledBoardRowColNamesProps = WithTheme & {
  direction: DirectionType
  gridArea: string
}

type StyledTextWrapperProps = {
  direction: DirectionType
}

export const StyledBoardRowColNames = styled.div<StyledBoardRowColNamesProps>(
  ({ direction, gridArea, theme }) => {
    const width = css`
      width: 32px;
      height: ${theme.board.dimensions};
      max-height: 640px;
    `
    const height = css`
      height: 32px;
      width: ${theme.board.dimensions};
      max-width: 640px;
      margin-top: -16px;
    `
    return css`
      z-index: 1;
      overflow: hidden;
      ${['row', 'row-reverse'].includes(direction) ? height : ''}
      ${['column', 'column-reverse'].includes(direction) ? width : ''}
      display: flex;
      flex-direction: ${direction};
      grid-area: ${gridArea};
      background-color: ${lighten(0.1, theme.palette[theme.mode].chess.w.bg)};
    `
  }
)
export const StyledTextWrapper = styled.div<StyledTextWrapperProps>(
  ({ direction }) => {
    const width = css`
      width: ${({ theme }) => `calc(${theme.board.dimensions} / 8)`};
      max-width: 80px;
    `
    const height = css`
      height: ${({ theme }) => `calc(${theme.board.dimensions} / 8)`};
      max-height: 80px;
    `

    return css`
      ${['row', 'row-reverse'].includes(direction) ? width : ''}
      ${['column', 'column-reverse'].includes(direction) ? height : ''}
    flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    `
  }
)

export const StyledText = styled.p<WithTheme>(({ theme }) => {
  return css`
    color: ${theme.palette[theme.mode].chess.b.bg};
    font-family: ${theme.font.family.heading};
    font-weight: bold;
    padding: 4px;
  `
})

const BoardRowColNames: FC<BoardRowColNamesProps> = ({
  direction = 'column',
  values,
  ...rest
}) => {
  return (
    <StyledBoardRowColNames direction={direction} {...rest}>
      {values.map(v => (
        <StyledTextWrapper direction={direction} key={v}>
          <StyledText>{v}</StyledText>
        </StyledTextWrapper>
      ))}
    </StyledBoardRowColNames>
  )
}

export default BoardRowColNames
