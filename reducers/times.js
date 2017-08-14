import { RENEW_TIMES, HANDLE_START_TIMER } from '../constants'

const initialState = {
  timeOne: new Date(),
  timeTwo: new Date(),
  timeThree: new Date(),
  isTimerRunning: false
}

export default function timeReducer (state = initialState, action) {
  switch (action.type) {
    case RENEW_TIMES:
      return {
        ...state,
        timeOne: new Date(),
        timeTwo: new Date(),
        timeThree: new Date()
      }

    case HANDLE_START_TIMER:
      console.log('timeReducer ' + action.type + ' ' + action.payload + ' ' + state.isTimerRunning)
      return {
        ...state,
        isTimerRunning: !state.isTimerRunning
      }

    default:
      return state
  }
}