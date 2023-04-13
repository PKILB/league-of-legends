import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const riotAPI = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://americas.api.riotgames.com/',
  timeout: '5000',
  params: { 'api_key': 'RGAPI-68eb5315-2019-4377-b356-ff53e0a0fd83'}
})

