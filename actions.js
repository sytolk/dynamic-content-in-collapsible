import { RENEW_TIMES, HANDLE_ONE_COLLAPSED, HANDLE_TWO_COLLAPSED } from './constants'

export function renewTimes () {
  console.log('action renewTimes')
  return {
    type: RENEW_TIMES
  }
}

export function handleOneCollapsed () {
  console.log('action handleOneCollapsed')
  return {
    type: HANDLE_ONE_COLLAPSED
  }
}

export function handleTwoCollapsed () {
  console.log('action handleTwoCollapsed')
  return {
    type: HANDLE_TWO_COLLAPSED
  }
}