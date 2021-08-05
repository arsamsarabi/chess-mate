import React, { FC } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import type { BoardType, CellType } from '#types/board'
import Board from './Board'
import BoardRowColNames from './BoardRowColNames'
import BoardWrapper from './BoardWrapper'

type BoardProps = {
  board: BoardType
}

export const BoardContainer: FC<BoardProps> = ({ board }) => {
  const getXYPosition = (index: number) => ({
    x: index % 8,
    y: Math.abs(Math.floor(index / 8) - 7),
  })

  const isDarkSquare = (index: number) => {
    const { x, y } = getXYPosition(index)
    return (x + y) % 2 === 1
  }

  const getPosition = (index: number) => {
    const { x, y } = getXYPosition(index)
    const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][x]
    return `${letter}${y + 1}`
  }

  return (
    <BoardWrapper>
      <BoardRowColNames
        values={[1, 2, 3, 4, 5, 6, 7, 8]}
        gridArea="1 / 1 / 1 / 2"
      />
      <DndProvider backend={HTML5Backend}>
        <Board>
          {board.flat().map((piece: CellType | null, index) => {
            const position = getPosition(index)
            return (
              <Board.Cell
                key={index}
                bg={isDarkSquare(index) ? 'b' : 'w'}
                position={position}
              >
                {piece ? (
                  <Board.Piece
                    color={piece.color}
                    type={piece.type}
                    position={position}
                  />
                ) : null}
              </Board.Cell>
            )
          })}
        </Board>
      </DndProvider>
      <BoardRowColNames
        values={['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']}
        direction="row"
        gridArea="2 / 2 / 2 / 2"
      />
    </BoardWrapper>
  )
}

export default BoardContainer
