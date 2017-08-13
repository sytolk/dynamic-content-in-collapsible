import { RENEW_TIMES, HANDLE_ONE_COLLAPSED, HANDLE_TWO_COLLAPSED } from '../constants'

const initialState = {
  timeOne: new Date(),
  timeTwo: new Date(),
  isOneCollapsed: false,
  isTwoCollapsed: false
}

export default function timeReducer (state = initialState, action) {
  switch (action.type) {
    case RENEW_TIMES:
      return {
        ...state,
        timeOne: new Date(),
        timeTwo: new Date()
      }

    case HANDLE_ONE_COLLAPSED:
      console.log('timeReducer ' + action.type + ' ' + action.payload + ' ' + state.isOneCollapsed)
      return {
        ...state,
        isOneCollapsed: !state.isOneCollapsed
      }

    case HANDLE_TWO_COLLAPSED:
      console.log('timeReducer ' + action.type + ' ' + action.payload + ' ' + state.isTwoCollapsed)
      return {
        ...state,
        isTwoCollapsed: !state.isTwoCollapsed
      }

    default:
      return state
  }
}