import type { Country } from './enums'
import { ContactFormFieldsKeys } from './enums'

export interface IState {
  country: Country
}

export interface IActionReducer {
  type: 'SET_COUNTRY'
  payload: Country
}
