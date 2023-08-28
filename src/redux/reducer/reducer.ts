import { SET_COUNTRY } from '../actions/actions_types'
import type { IState, IActionReducer } from '../../types'
import { type Country } from '../../enums'

const countrylocal = localStorage.getItem('country') ?? null

const initialState: IState = {
  country: countrylocal as Country
}

const rootReducer = (state = initialState, action: IActionReducer): IState => {
  const { type, payload } = action

  switch (type) {
    case SET_COUNTRY:
      localStorage.setItem('country', payload)
      window.scroll({
        behavior: 'smooth',
        top: 0
      })

      return {
        ...state,
        country: payload
      }

    default:
      return {
        ...state
      }
  }
}

// this is equivalent to returning 'IState'
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
