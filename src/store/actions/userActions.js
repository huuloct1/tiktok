import actionTypes from './actionTypes'

export const updateUser = (user) => {
  return {
    type: actionTypes.USER.UPDATE_USER,
    payload: user,
  }
}
