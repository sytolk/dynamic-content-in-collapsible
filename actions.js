import { RENEW_TIMES, HANDLE_ONE_COLLAPSED, HANDLE_TWO_COLLAPSED, HANDLE_START_TIMER } from './constants'

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

export function handleStartTimer () {
  console.log('action handleStartTimer')
  return {
    type: HANDLE_START_TIMER
  }
}