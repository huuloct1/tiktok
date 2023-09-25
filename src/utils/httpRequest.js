import axios from 'axios'

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

const get = async (path, param) => {
  const res = await httpRequest.get(path, param)
  return res.data
}

export default httpRequest
export { get }
