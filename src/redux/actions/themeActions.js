import { AUTHENTICATE, DARK_MODE, LIGHT_MODE, SEEN } from '../types'

export function darkMode() {
  return { type: DARK_MODE, payload: false }
}
export function lightMode() {
  return { type: LIGHT_MODE, payload: true }
}

export function authenticate() {
  return { type: AUTHENTICATE }
}

export function seen(i) {
  return { type: SEEN, payload: i }
}
