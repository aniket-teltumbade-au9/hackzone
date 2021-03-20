import { REGISTER_DEVELOPER } from "../actionTypes"

const initialState = {
  userRegister: null
}

const developerReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case REGISTER_DEVELOPER:
      return { ...state, userRegister: payload }

    default:
      return state
  }
}
export default developerReducer
