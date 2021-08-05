import React, { FC, useEffect, useState } from 'react'

import type { BoardType } from '#types/board'
import Layout from '#components/Layout'
import Board from '#components/Chess'
import { gameSubject } from '../Game'

export const Game: FC = () => {
  const [board, setBoard] = useState<BoardType>([])

  useEffect(() => {
    gameSubject.subscribe(game => setBoard(game.board))

    return () => {
      gameSubject.unsubscribe()
    }
  }, [])

  return (
    <Layout>
      <Board board={board} />
    </Layout>
  )
}

export default Game
