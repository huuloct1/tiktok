import * as request from '~/utils/request'

export const searchUser = async (q, type = 'less') => {
  try {
    const res = await request.get('/users/search', {
      params: {
        q,
        type,
      },
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}
