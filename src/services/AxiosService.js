import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const riotAPI = Axios.create({
  baseURL: 'https://americas.api.riotgames.com/',
  timeout: '5000',
  params: { 'api_key': 'RGAPI-400bcc25-ff91-4db9-9213-f1c37db9891d'}
})

