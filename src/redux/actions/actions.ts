import { type Country } from '../../enums'
import { type IActionReducer } from '../../types'
import { SET_COUNTRY } from './actions_types'

const setCountry = (payload: Country): IActionReducer => {
  return {
    type: SET_COUNTRY,
    payload
  }
}

export default setCountry
