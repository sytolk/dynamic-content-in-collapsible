import { combineReducers } from 'redux'
import times from './times'
import collapsed from './collapsed'

const rootReducer = combineReducers({
  times,
  collapsed
})

export default rootReducer