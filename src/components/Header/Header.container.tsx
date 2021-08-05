import React, { FC } from 'react'
import Headroom from 'react-headroom'

import Header from './Header'
import routes from '#navigation/routes'
import logo from '../../logo.svg'

export const HeaderContainer: FC = () => {
  return (
    <Headroom>
      <Header>
        <Header.Logo src={logo} to={routes.HOME} alt="Chess Mate Logo" />
        <Header.Brand>Chess Mate</Header.Brand>
        <Header.ButtonLink to={routes.GAME} color="secondary">
          Play now
        </Header.ButtonLink>
        <Header.ButtonLink to={routes.SIGN_IN}>Sign in</Header.ButtonLink>
      </Header>
    </Headroom>
  )
}

export default HeaderContainer
