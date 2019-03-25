import configService from './config'
import axios from 'axios';

const trackService = {}

const URL = `${configService.apiUrl}/search?q=:q&type=track`

trackService.search = function (q) {
  const url = URL.replace(':q', q)
  return axios.get(url)
    .then(res => res.data)
}

export default trackService