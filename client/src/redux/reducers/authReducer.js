import { IS_LOGGEDIN, LOGIN_COMPANY, LOGIN_DEVELOPER, LOGOUT, REGISTER_COMPANY, REGISTER_DEVELOPER } from "../actionTypes"

const initialState = {
  userRegister: null,
  isAuth: false,
  role: null,
  userLogin: null,
  userProfile: null
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

    case REGISTER_COMPANY:
      return {
        ...state,
        userRegister: payload
      }
      
    case LOGIN_COMPANY:
      return {
        ...state,
        isAuth: payload.isAuth,
        userLogin: payload.userLogin,
        role: 'company'
      }

    case IS_LOGGEDIN:
      return {
        ...state,
        isAuth: payload.isAuth,
        userProfile: payload.userProfile.msg,
        role: sessionStorage.getItem('role')
      }

    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        userProfile: null,
        role: null
      }

    default:
      return state
  }
}
export default authReducer
