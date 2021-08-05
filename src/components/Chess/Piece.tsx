import React, { FC, HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { PieceType } from 'chess.js'
import { useDrag, DragPreviewImage } from 'react-dnd'

import { ColorType } from '#types/board'

export type PieceProps = HTMLAttributes<HTMLImageElement> & {
  color: ColorType
  type: PieceType
  position: string
}

export const StyledPiece = styled.img(({ theme }) => {
  return css`
    width: calc(${theme.board.dimensions} / 8 * 0.8);
    max-width: 64px;
    height: calc(${theme.board.dimensions} / 8 * 0.8);
    max-height: 64px;
  `
})

const Piece: FC<PieceProps> = ({ color, type, position, ...rest }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'PIECE',
    item: () => {
      return {
        type: 'PIECE',
        id: `${position}_${type}_${color}`,
      }
    },
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1
  const pieceImagePath = `/images/chess/${color}-${type}.svg`

  return (
    <>
      <DragPreviewImage connect={preview} src={pieceImagePath} />
      <div style={{ opacity }} ref={drag}>
        <StyledPiece src={pieceImagePath} {...rest} />
      </div>
    </>
  )
}

export default Piece
