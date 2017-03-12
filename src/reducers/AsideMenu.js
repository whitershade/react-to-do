import { LOCATION_CHANGE }   from 'react-router-redux'
import { REHYDRATE }         from 'redux-persist/constants'

import { ASIDE_MENU_IS_OPEN } from '../constants/AsideMenu'


export const initialState = {
  isOpen: false
}

export default function page(state = initialState, action) {
  switch (action.type) {
    case ASIDE_MENU_IS_OPEN:
      return Object.assign({}, state, { isOpen: action.isOpen })

    case LOCATION_CHANGE:
      return Object.assign({}, state, { isOpen: false })

    case REHYDRATE:
      return Object.assign({}, state, { isOpen: false })

    default:
      return state;
  }
}
