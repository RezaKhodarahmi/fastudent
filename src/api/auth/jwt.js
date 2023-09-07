// ** JWT import
import jwt from 'jsonwebtoken'

// ** Mock Adapter
import BASE_URL from '../BASE_URL'
import mock from 'src/api/mock'

// ** Default AuthConfig
import defaultAuthConfig from 'src/configs/auth'

const users = [
  {
    id: 1,
    Roles: 'admin',
    Password: '123!@#aA',
    FirstName: 'Payam',
    LastName: 'Mahjoub',
    Username: 'johndoe',
    Email: 'payam.mahjoub@gmail.com'
  },
  {
    id: 2,
    Roles: 'client',
    Password: 'client',
    FirstName: 'Payam',
    LastName: 'Mahjoub',
    Username: 'janedoe',
    Email: 'client@vuexy.com'
  }
]

// ! These two secrets should be in .env file and not in any other file
const jwtConfig = {
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  expirationTime: process.env.NEXT_PUBLIC_JWT_EXPIRATION,
  refreshTokenSecret: process.env.NEXT_PUBLIC_JWT_REFRESH_TOKEN_SECRET
}

// Login
mock.onPost( BASE_URL + '/auth/login' ).reply(request => {
  const { user, pass } = JSON.parse(request.data)

  let error = {
    user: ['Something went wrong']
  }
  const UserRequest = users.find(u => u.Email === user && u.Password === pass)

  if (UserRequest) {
    const accessToken = jwt.sign({ id: UserRequest.id }, jwtConfig.secret, { expiresIn: jwtConfig.expirationTime })

    const response = {
      accessToken,
      userData: { ...UserRequest, pass: undefined }
    }

    return [200, response]
  } else {
    error = {
      user: ['Email or Password is Invalid']
    }

    return [400, { error }]
  }
})

// Register
mock.onPost('/jwt/register').reply(request => {
  if (request.data.length > 0) {
    const { email, password, username } = JSON.parse(request.data)
    const isEmailAlreadyInUse = users.find(user => user.email === email)
    const isUsernameAlreadyInUse = users.find(user => user.username === username)

    const error = {
      email: isEmailAlreadyInUse ? 'This email is already in use.' : null,
      username: isUsernameAlreadyInUse ? 'This username is already in use.' : null
    }
    if (!error.username && !error.email) {
      const { length } = users
      let lastIndex = 0
      if (length) {
        lastIndex = users[length - 1].id
      }

      const userData = {
        id: lastIndex + 1,
        email,
        password,
        username,
        avatar: null,
        fullName: '',
        Roles: 'admin'
      }
      users.push(userData)
      const accessToken = jwt.sign({ id: userData.id }, jwtConfig.secret)
      const user = { ...userData }
      delete user.password
      const response = { accessToken }

      return [200, response]
    }

    return [200, { error }]
  } else {
    return [401, { error: 'Invalid Data' }]
  }
})

// Authorization
mock.onGet('/auth/me').reply(config => {
  // ** Get token from header
  // @ts-ignore
  const token = config.headers.Authorization

  // ** Default response
  let response = [200, {}]

  // ** Checks if the token is valid or expired
  jwt.verify(token, jwtConfig.secret, (err, decoded) => {
    // ** If token is expired
    if (err) {
      // ** If onTokenExpiration === 'logout' then send 401 error
      if (defaultAuthConfig.onTokenExpiration === 'logout') {
        // ** 401 response will logout user from AuthContext file
        response = [401, { error: { error: 'Invalid User' } }]
      } else {
        // ** If onTokenExpiration === 'refreshToken' then generate the new token
        const oldTokenDecoded = jwt.decode(token, { complete: true })

        // ** Get user id from old token
        // @ts-ignore
        const { id: userId } = oldTokenDecoded.payload

        // ** Get user that matches id in token
        const user = users.find(u => u.id === userId)

        // ** Sign a new token
        const accessToken = jwt.sign({ id: userId }, jwtConfig.secret, {
          expiresIn: jwtConfig.expirationTime
        })

        // ** Set new token in localStorage
        window.localStorage.setItem(defaultAuthConfig.storageTokenKeyName, accessToken)
        const obj = { userData: { ...user, password: undefined } }

        // ** return 200 with user data
        response = [200, obj]
      }
    } else {
      // ** If token is valid do nothing
      // @ts-ignore
      const userId = decoded.id

      // ** Get user that matches id in token
      const userData = JSON.parse(JSON.stringify(users.find(u => u.id === userId)))
      delete userData.password

      // ** return 200 with user data
      response = [200, { userData }]
    }
  })

  return response
})
