import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import Cell, { CellProps } from './Cell'
import Piece, { PieceProps } from './Piece'

type BoardSubComponents = {
  Cell: FC<CellProps>
  Piece: FC<PieceProps>
}

export const StyledBoard = styled.div(({ theme }) => {
  return css`
    width: ${theme.board.dimensions};
    max-width: 640px;
    height: ${theme.board.dimensions};
    max-height: 640px;
    box-shadow: 0 0 8px
      ${theme.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.6)'
        : 'rgba(0, 0, 0, 0.4)'};

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 2;
  `
})

const Board: FC & BoardSubComponents = ({ children, ...rest }) => {
  return <StyledBoard {...rest}>{children}</StyledBoard>
}

Board.Cell = Cell
Board.Piece = Piece

export default Board
