import axios from 'axios'

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api',
})

const get = async (path, param) => {
  const res = await request.get(path, param)
  return res.data
}

export default request
export { get }
