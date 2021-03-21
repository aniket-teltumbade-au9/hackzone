import axios from 'axios';
import { LOGIN_DEVELOPER, REGISTER_DEVELOPER, REGISTER_COMPANY, LOGIN_COMPANY, IS_LOGGEDIN, LOGOUT } from '../actionTypes';

export const devRegister = (body) => async (dispatch) => {
  const data = JSON.stringify(body)
  const config = {
    method: 'post',
    url: 'http://localhost:4000/user/register',
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
    url: 'http://localhost:4000/user/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  const result = await axios(config)
  if (result.status === 200) {
    localStorage.setItem('token', result.data.authtoken)
    localStorage.setItem('role', 'developer')
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
    url: 'http://localhost:4000/admin/register',
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
    url: 'http://localhost:4000/admin/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  const result = await axios(config)
  if (result.status === 200) {
    localStorage.setItem('token', result.data.authtoken)
    localStorage.setItem('role', 'company')
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
  if (localStorage.getItem('token') && localStorage.getItem('role')) {
    if (localStorage.getItem('role') === 'developer') {
      const config = {
        method: 'get',
        url: 'http://localhost:4000/user/profile',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token')
        }
      };

      const result = await axios(config)
      if (result.status !== 200) {
        localStorage.clear()
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
    else if(localStorage.getItem('role') === 'company') {
      const config = {
        method: 'get',
        url: 'http://localhost:4000/admin/profile',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token')
        }
      };

      const result = await axios(config)
      if (result.status!==200) {
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
  localStorage.clear()
  dispatch({
    type: LOGOUT,
    payload: null
  })
}
