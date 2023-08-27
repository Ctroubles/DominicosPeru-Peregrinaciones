import type { Country } from './enums'
import { ContactFormFieldsKeys } from './enums'

export interface IState {
  country: keyof typeof Country
}

export interface IActionReducer {
  type: 'SET_COUNTRY'
  payload: keyof typeof Country
}
