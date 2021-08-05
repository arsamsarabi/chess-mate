import React, { FC, HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { Square } from 'chess.js'
import { useDrop } from 'react-dnd'

import { ColorType } from '#types/board'
import type { WithTheme } from '#types/theme'
import { handleMove } from '../../Game'

export type CellProps = HTMLAttributes<HTMLDivElement> & {
  bg: ColorType
  position: string
}

interface StyledCellProps extends WithTheme {
  bgColor: ColorType
}

export const StyledCell = styled.div<StyledCellProps>(({ bgColor, theme }) => {
  return css`
    width: calc(${theme.board.dimensions} / 8);
    max-width: 80px;
    height: calc(${theme.board.dimensions} / 8);
    max-height: 80px;
    background-color: ${theme.palette[theme.mode].chess[bgColor].bg};
    display: flex;
    justify-content: center;
    align-items: center;
  `
})

const Cell: FC<CellProps> = ({ bg, children, position, ...rest }) => {
  const [, drop] = useDrop({
    accept: 'PIECE',
    drop: (item: { type: string; id: string }) => {
      const [from] = item.id.split('_')
      handleMove(from as Square, position as Square)
    },
  })
  return (
    <StyledCell bgColor={bg} ref={drop} {...rest}>
      {children}
    </StyledCell>
  )
}

export default Cell
