import { IS_LOGGEDIN, LOGIN_DEVELOPER, REGISTER_DEVELOPER } from "../actionTypes"

const initialState = {
  userRegister: null,
  isAuth: false,
  role: null,
  userLogin: null
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case REGISTER_DEVELOPER:
      return {
        ...state,
        userRegister: payload
      }

    case LOGIN_DEVELOPER:
      return {
        ...state,
        isAuth: payload.isAuth,
        userLogin: payload.userLogin,
        role: 'developer'
      }

    case IS_LOGGEDIN:
      return {
        ...state,
        isAuth: payload,
        role: localStorage.getItem('role')
      }

    default:
      return state
  }
}
export default authReducer
