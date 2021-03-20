import { combineReducers } from 'redux'
import developerReducer from './reducers/developerReducer'
import problemReducer from './reducers/problemReducer'

let rootReducer = combineReducers({
  problemState: problemReducer,
  developerState: developerReducer
})
export default rootReducer