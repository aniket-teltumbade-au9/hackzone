import { LOAD_CHALLENGE_LEADERBOARD, LOAD_CONTEST_LEADERBOARD } from "../actionTypes"

const initialState = {
  challenge_leaderboard: null,
  contest_leaderboard: null
}

const leaderboardReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case LOAD_CHALLENGE_LEADERBOARD:
      return { ...state, challenge_leaderboard: payload }

    case LOAD_CONTEST_LEADERBOARD:
      return { ...state, contest_leaderboard: payload }

    default:
      return state
  }
}
export default leaderboardReducer