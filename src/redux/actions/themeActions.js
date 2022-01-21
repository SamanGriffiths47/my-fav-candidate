import { AUTHENTICATE, DARK_MODE, LIGHT_MODE, SEEN } from '../types'

export function darkMode() {
  document.querySelector('html').style.backgroundColor = 'black'
  return { type: DARK_MODE, payload: false }
}
export function lightMode() {
  document.querySelector('html').style.backgroundColor = 'white'
  return { type: LIGHT_MODE, payload: true }
}

export function authenticate() {
  return { type: AUTHENTICATE }
}

export function seen(i) {
  return { type: SEEN, payload: i }
}
