import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:3200'

  // baseURL: 'https://idtech.ca:3200'
})
