import Axios from 'axios'
import { baseURL, riotKey } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const riotAPI = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://americas.api.riotgames.com/',
  timeout: '5000',
  params: { 'api_key': riotKey}
})

