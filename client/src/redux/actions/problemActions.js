import axios from "axios";
import { PROBLEM_LIST, RUN_PROBLEM, SINGLE_PROBLEM } from "../actionTypes"

export const allProblems = () => (dispatch) => {
  var config = {
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}/problem/all`,
    headers: {}
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      dispatch({
        type: PROBLEM_LIST,
        payload: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}
export const singleProblem = (name) => (dispatch) => {
  var config = {
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}/problem/single/${name.replace(/-/g, " ")}`,
    headers: {}
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      dispatch({
        type: SINGLE_PROBLEM,
        payload: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });

}
export const runProgram = (language, code, samples, name) => async (dispatch) => {
  var config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/problem/run`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({ language, code, samples })
  };

  let res = await axios(config)
  let result = { ...res.data, name }
  dispatch({
    type: RUN_PROBLEM,
    payload: result
  })
}

