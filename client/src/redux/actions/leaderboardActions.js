import axios from "axios"
import { LOAD_CHALLENGE_LEADERBOARD } from "../actionTypes"

export const challengeLeaderboard = (body) => async (dispatch) => {
  var config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/rank/challenge_rank`,
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': sessionStorage.getItem('token')
    },
    data: JSON.stringify(body)
  }
  let res = await axios(config)
  dispatch({
    type: LOAD_CHALLENGE_LEADERBOARD,
    payload: res.data
  })
}
