import React, { FC, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import routes from './routes'

const Home = lazy(() => import('#pages/Home'))
const Profile = lazy(() => import('#pages/Profile'))
const Game = lazy(() => import('#pages/Game'))
const Signin = lazy(() => import('#pages/Signin'))
const Signup = lazy(() => import('#pages/Signup'))

const Navigation: FC = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Router>
      <Switch>
        <Route path={routes.HOME} exact component={Home} />
        <Route path={routes.PROFILE} exact component={Profile} />
        <Route path={routes.GAME} exact component={Game} />
        <Route path={routes.SIGN_IN} exact component={Signin} />
        <Route path={routes.SIGN_UP} exact component={Signup} />
      </Switch>
    </Router>
  </Suspense>
)

export default Navigation
