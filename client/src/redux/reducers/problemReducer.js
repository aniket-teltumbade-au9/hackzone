import { ADD_PROBLEM, RUN_PROBLEM } from "../actionTypes"

const initialState = {
  problem_output: null,
  add_problem:null
}

const problemReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_PROBLEM:
      return { ...state, add_problem: payload }

    case RUN_PROBLEM:
      return { ...state, problem_output: payload }

    default:
      return state
  }
}
export default problemReducer
