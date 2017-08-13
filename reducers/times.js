import { RENEW_TIMES } from '../constants'

const initialState = {
  timeOne: new Date(),
  timeTwo: new Date()
}

export default function timeReducer (state = initialState, action) {
  switch (action.type) {
    case RENEW_TIMES:
      return {
        ...state,
        timeOne: new Date(),
        timeTwo: new Date()
      }
    default:
      return state
  }
}