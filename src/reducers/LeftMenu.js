import { LEFT_MENU_IS_OPEN } from '../constans/LeftMenu'

export default function page(state = { isOpen: false }, action) {
  switch (action.type) {
    case LEFT_MENU_IS_OPEN:
      return Object.assign({}, state, { isOpen: action.isOpen });
    case '@@router/LOCATION_CHANGE':
      return Object.assign({}, state, { isOpen: false });
    default:
      return state;
  }
}
