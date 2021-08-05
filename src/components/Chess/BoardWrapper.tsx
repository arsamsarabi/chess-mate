import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

export type BoardWrapperProps = HTMLAttributes<HTMLDivElement>

export const StyledBoardWrapper = styled.div`
  width: ${({ theme }) => `calc(${theme.board.dimensions} + 32px)`};
  height: ${({ theme }) => `calc(${theme.board.dimensions} + 32px)`};
  margin: auto;
  display: grid;
  grid-template-columns: 32px 1fr;
  grid-template-rows: 1fr 32px;
  grid-column-gap: 0;
  grid-row-gap: 0;
`

const BoardWrapper: FC<BoardWrapperProps> = ({ children, ...rest }) => {
  return <StyledBoardWrapper {...rest}>{children}</StyledBoardWrapper>
}

export default BoardWrapper
