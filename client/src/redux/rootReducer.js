import { combineReducers } from 'redux'
import authReducer from './reducers/authReducer'
import contestReducer from './reducers/contestReducer'
import problemReducer from './reducers/problemReducer'

let rootReducer = combineReducers({
  problemState: problemReducer,
  authState: authReducer,
  contestState: contestReducer
})
export default rootReducer