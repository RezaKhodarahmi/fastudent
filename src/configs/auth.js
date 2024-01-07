import BASE_URL from '../api/BASE_URL'

export default {
  meEndpoint: BASE_URL + '/auth/refresh',
  loginEndpoint: BASE_URL + '/auth/user/login',
  registerEndpoint: BASE_URL + '/student/user/register',
  verifyRegisterEndpoint: BASE_URL + '/student/user/register/verify',
  registerPersonalInfo: BASE_URL + '/student/user/register/info',
  requestfogetpasswordEndpoint: BASE_URL + '/auth/forget-password',
  verifyfogetpasswordEndpoint: BASE_URL + '/auth/forget-password/verify',
  resetpasswordEndpoint: BASE_URL + '/auth/forget-password/reset',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
