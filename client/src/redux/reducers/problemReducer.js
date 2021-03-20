import { PROBLEM_LIST, RUN_PROBLEM, SINGLE_PROBLEM } from "../actionTypes"

const initialState = {
  problems: null,
  problem: null,
  problem_output: null
}

const problemReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case PROBLEM_LIST:
      return { ...state, problems: payload }

    case SINGLE_PROBLEM:
      return { ...state, problem: payload }

    case RUN_PROBLEM:
      return { ...state, problem_output: payload }

    default:
      return state
  }
}
export default problemReducer
