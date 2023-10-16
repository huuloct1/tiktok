import * as httpRequest from '~/utils/httpRequest'

export const getSuggested = async (page = 1, perPage = 12) => {
  try {
    const res = await httpRequest.get('/users/suggested', {
      params: {
        page,
        per_page: perPage,
      },
    })
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const getUserProfile = async (user) => {
  try {
    const res = await httpRequest.get(`/users/@${user}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
