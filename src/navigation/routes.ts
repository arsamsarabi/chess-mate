enum routes {
  HOME = '/',
  PROFILE = '/me',
  GAME = '/new-game',
  SIGN_IN = '/signin',
  SIGN_UP = '/signup',
}

export const prettyPathnames: { [key in string]: string } = {
  me: 'Profile',
  'new-game': 'Game',
  signin: 'Sign in',
  signup: 'Sign up',
}

export default routes
