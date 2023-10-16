import actionTypes from '../actions/actionTypes'

const initState = {
  fullName: 'Luke ne',
  nickName: 'huuloct1',
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.USER.UPDATE_USER:
      return {
        ...action.payload,
      }

    default:
      return state
  }
}

export default userReducer
