import axios from 'axios';
import { LOGIN_DEVELOPER, REGISTER_DEVELOPER, REGISTER_COMPANY, LOGIN_COMPANY, IS_LOGGEDIN, LOGOUT } from '../actionTypes';

export const devRegister = (body) => async (dispatch) => {
  const data = JSON.stringify(body)
  const config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/user/register`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  const result = await axios(config)
  dispatch({
    type: REGISTER_DEVELOPER,
    payload: result.data
  })
}

export const devLogin = (body) => async (dispatch) => {

  const data = JSON.stringify(body)
  const config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/user/login`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  const result = await axios(config)
  if (result.status === 200) {
    sessionStorage.setItem('token', result.data.authtoken)
    sessionStorage.setItem('role', 'developer')
    dispatch({
      type: LOGIN_DEVELOPER,
      payload: { isAuth: true, userLogin: result.data.authtoken }
    })
  }
  else {
    dispatch({
      type: LOGIN_DEVELOPER,
      payload: { isAuth: false, userLogin: null }
    })
  }
}

export const compRegister = (body) => async (dispatch) => {
  const data = JSON.stringify(body)
  const config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/admin/register`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  const result = await axios(config)
  console.log("action test1",result)

  dispatch({
    type: REGISTER_COMPANY,
    payload: result.data
  })
}

export const compLogin = (body) => async (dispatch) => {

  const data = JSON.stringify(body)
  const config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/admin/login`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  const result = await axios(config)
  if (result.status === 200) {
    sessionStorage.setItem('token', result.data.authtoken)
    sessionStorage.setItem('role', 'company')
    dispatch({
      type: LOGIN_COMPANY,
      payload: { isAuth: true, userLogin: result.data.authtoken }
    })
  }
  else {
    dispatch({
      type: LOGIN_COMPANY,
      payload: { isAuth: false, userLogin: null }
    })
  }
}


export const isAuthenticated = () => async (dispatch) => {
  if (sessionStorage.getItem('token') && sessionStorage.getItem('role')) {
    if (sessionStorage.getItem('role') === 'developer') {
      const config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/user/profile`,
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': sessionStorage.getItem('token')
        }
      };

      const result = await axios(config)
      if (result.status !== 200) {
        sessionStorage.clear()
        dispatch({
          type: IS_LOGGEDIN,
          payload: { isAuth: false, userProfile: null }
        })
      }
      else {
        dispatch({
          type: IS_LOGGEDIN,
          payload: { isAuth: true, userProfile: result.data }
        })
      }
    }
    else if(sessionStorage.getItem('role') === 'company') {
      const config = {
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}/admin/profile`,
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': sessionStorage.getItem('token')
        }
      };

      const result = await axios(config)
      console.log(result.status)
      if (result.data.err) {
        sessionStorage.clear()
        dispatch({
          type: IS_LOGGEDIN,
          payload: { isAuth: false, userProfile: null }
        })
      }
      else {
        dispatch({
          type: IS_LOGGEDIN,
          payload: { isAuth: true, userProfile: result.data }
        })
      }
    }
  }
}
export const logout = () => (dispatch) => {
  sessionStorage.clear()
  dispatch({
    type: LOGOUT,
    payload: null
  })
}
