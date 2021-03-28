import { ADD_CONTEST, LOAD_CONTEST, LOAD_ENDED_CONTESTS, LOAD_LIVE_CONTESTS, LOAD_PROBLEM, LOAD_UPCOMING_CONTESTS } from "../actionTypes"

const initialState = {
  add_contest: null,
  live_contests: null,
  upcoming_contests: null,
  ended_contests: null,
  contest_data: null,
  problem_data: null
}

const contestReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_CONTEST:
      return { ...state, add_contest: payload }

    case LOAD_LIVE_CONTESTS:
      return { ...state, live_contests: payload }

    case LOAD_UPCOMING_CONTESTS:
      return { ...state, upcoming_contests: payload }

    case LOAD_ENDED_CONTESTS:
      return { ...state, ended_contests: payload }

    case LOAD_CONTEST:
      return { ...state, contest_data: payload }

    case LOAD_PROBLEM:
      return { ...state, problem_data: payload }

    default:
      return state
  }
}
export default contestReducer