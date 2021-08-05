import { PieceType } from 'chess.js'

export type ColorType = 'w' | 'b'

export type CellType = { type: PieceType; color: ColorType }

export type BoardType = Array<Array<CellType | null>>
