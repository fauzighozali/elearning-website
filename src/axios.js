// axios
import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/'
// const baseURL = 'http://192.168.1.104:80/'

export default axios.create({
  baseURL
  // You can add your headers here
})
