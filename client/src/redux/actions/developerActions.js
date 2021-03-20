import axios from 'axios';
import { REGISTER_DEVELOPER } from '../actionTypes';
/* export const %tmpaction% = ()=>(dispatch)=>{
  dispatch({
    type:'%tmpaction%',
    payload:'%tempload%'
  })
} */
export const devRegister = (body) => async (dispatch) => {
  var data = JSON.stringify(body)
  var config = {
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