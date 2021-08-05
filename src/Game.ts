import { Chess, Square } from 'chess.js'
import { BehaviorSubject } from 'rxjs'

const chess = new Chess(
  'rnb2bnr/pppPkppp/8/4p3/7q/8/PPPP1PPP/RNBQKBNR w KQ - 1 5'
)

export const gameSubject = new BehaviorSubject({
  board: chess.board(),
  pendingPromotion: {},
})

export const newGame = (): void => {
  updateGame()
}

export const handleMove = (from: Square, to: Square): void => {
  const promotions = chess.moves({ verbose: true }).filter(m => m.promotion)

  console.table(promotions)

  if (promotions.some(p => `${p.from}:${p.to}` === `${from}:${to}`)) {
    // promote()
    const pendingPromotion = { from, to, color: promotions[0].color }
    updateGame(pendingPromotion)
  }

  const { pendingPromotion } = gameSubject.getValue()
  if (!pendingPromotion) move(from, to)
}

const move = (from: Square, to: Square): void => {
  const isLegal = chess.move({ from, to })
  if (isLegal) {
    updateGame()
  }
}

const updateGame = (pendingPromotion = {}) => {
  const newGame = {
    board: chess.board(),
    pendingPromotion,
  }

  gameSubject.next(newGame)
}
