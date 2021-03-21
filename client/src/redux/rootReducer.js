import { combineReducers } from 'redux'
import authReducer from './reducers/authReducer'
import problemReducer from './reducers/problemReducer'

let rootReducer = combineReducers({
  problemState: problemReducer,
  authState: authReducer
})
export default rootReducer