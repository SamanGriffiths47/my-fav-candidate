import { DARK_MODE, LIGHT_MODE, MOUSE_IN, MOUSE_OUT } from '../types'

export function darkMode() {
  return { type: DARK_MODE, payload: false }
}
export function lightMode() {
  return { type: LIGHT_MODE, payload: true }
}

export function mouseIn() {
  return { type: MOUSE_IN, payload: 1 }
}

export function mouseOut() {
  return { type: MOUSE_OUT, payload: 0 }
}
