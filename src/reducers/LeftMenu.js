import { LEFT_MENU_IS_OPEN } from '../constans/LeftMenu'
import { LOCATION_CHANGE }   from 'react-router-redux'
import { REHYDRATE }         from 'redux-persist/constants'

export default function page(state = { isOpen: false }, action) {
  switch (action.type) { 
    case LEFT_MENU_IS_OPEN:
      return Object.assign({}, state, { isOpen: action.isOpen })

    case LOCATION_CHANGE:
      return Object.assign({}, state, { isOpen: false })

    case REHYDRATE:
      return Object.assign({}, state, { isOpen: false })

    default:
      return state;
  }
}
