// axios
import axios from 'axios'

// const baseURL = 'http://localhost:8000'
// const baseURL = 'http://192.168.1.25:80/'
const baseURL = 'http://api-kms.maesagroup.co.id/'

export default axios.create({
  baseURL
  // You can add your headers here
})
