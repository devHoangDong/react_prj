import axios from 'axios'
import queryString from 'query-string'
// 'https://5ff81fd710778b0017042d79.mockapi.io/api'
const axiosClient = axios.create({
  baseURL: 'http://portalbe.newca.vn/api',
  paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.response.use( response => {
  if(response && response.data) {
    return response.data
  }

  return response
}, (error) => {
  throw error
})

export default axiosClient;
