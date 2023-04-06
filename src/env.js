export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = ''
export const clientId = ''
export const audience = ''

// NOTE https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Kilial?api_key=RGAPI-400bcc25-ff91-4db9-9213-f1c37db9891d
// NOTE 9XJ07WiUwZgt7l6w1rfHI5HUZPrWwQiGD9tDA2ZhuuE30F9V this is encrypted summoner id
// 63 champion id